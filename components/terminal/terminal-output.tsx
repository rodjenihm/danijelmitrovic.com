"use client";

import { useEffect, useRef } from "react";
import { HistoryEntry } from "./use-terminal-commands";
import { CommandOutput } from "./commands";

type TerminalOutputProps = {
  history: HistoryEntry[];
};

function OutputLine({ output }: { output: CommandOutput }) {
  const colorClass = {
    text: "text-[var(--terminal-green)]",
    error: "text-red-500",
    success: "text-[var(--terminal-amber)]",
    ascii: "text-[var(--terminal-green)]",
    link: "text-[var(--terminal-amber)]",
  }[output.type];

  if (output.type === "ascii") {
    return (
      <pre className={`${colorClass} whitespace-pre font-mono text-xs leading-tight`}>
        {output.content}
      </pre>
    );
  }

  return <div className={colorClass}>{output.content}</div>;
}

export function TerminalOutput({ history }: TerminalOutputProps) {
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div
      ref={outputRef}
      role="log"
      aria-live="polite"
      aria-label="Terminal output"
      className="flex-1 overflow-y-auto p-4 font-mono text-sm"
    >
      {/* Welcome message */}
      <div className="mb-4 text-[var(--terminal-green)]">
        <div>Welcome to Danijel&apos;s Terminal v1.0</div>
        <div className="text-[var(--terminal-dim)]">
          Type &apos;help&apos; for available commands.
        </div>
      </div>

      {/* Command history */}
      {history.map((entry, index) => (
        <div key={index} className="mb-2">
          {/* Command prompt */}
          <div className="flex items-center gap-2">
            <span className="text-[var(--terminal-amber)]">guest@portfolio</span>
            <span className="text-[var(--terminal-green)]">:</span>
            <span className="text-[var(--terminal-dim)]">~</span>
            <span className="text-[var(--terminal-green)]">$</span>
            <span className="text-[var(--terminal-green)]">{entry.command}</span>
          </div>
          {/* Command output */}
          <div className="mt-1">
            {entry.output.map((output, outputIndex) => (
              <OutputLine key={outputIndex} output={output} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
