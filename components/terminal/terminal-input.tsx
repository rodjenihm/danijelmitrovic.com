"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type TerminalInputProps = {
  onSubmit: (command: string) => void;
  onHistoryUp: () => string;
  onHistoryDown: () => string;
};

export function TerminalInput({
  onSubmit,
  onHistoryUp,
  onHistoryDown,
}: TerminalInputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const previousCommand = onHistoryUp();
      setValue(previousCommand);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextCommand = onHistoryDown();
      setValue(nextCommand);
    }
  };

  return (
    <div className="flex items-center gap-2 border-t border-[var(--terminal-dim)] p-4 font-mono text-sm">
      <span className="text-[var(--terminal-amber)]">guest@portfolio</span>
      <span className="text-[var(--terminal-green)]">:</span>
      <span className="text-[var(--terminal-dim)]">~</span>
      <span className="text-[var(--terminal-green)]">$</span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-[var(--terminal-green)] outline-none caret-transparent"
          aria-label="Terminal input"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
        {/* Custom cursor */}
        <span
          className="terminal-cursor pointer-events-none absolute top-0 left-0 text-[var(--terminal-green)]"
          style={{ left: `${value.length}ch` }}
        >
          _
        </span>
      </div>
    </div>
  );
}
