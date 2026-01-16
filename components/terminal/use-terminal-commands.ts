"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { executeCommand, CommandOutput } from "./commands";

export type HistoryEntry = {
  command: string;
  output: CommandOutput[];
};

export function useTerminalCommands(onClose: () => void) {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const runCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      const result = executeCommand(trimmedInput);

      if (result.shouldClear) {
        setHistory([]);
      } else {
        setHistory((prev) => [
          ...prev,
          { command: trimmedInput, output: result.output },
        ]);
      }

      setCommandHistory((prev) => [...prev, trimmedInput]);
      setHistoryIndex(-1);

      if (result.navigateTo) {
        router.push(result.navigateTo);
      }

      if (result.shouldClose) {
        setTimeout(() => {
          onClose();
        }, 500);
      }
    },
    [router, onClose]
  );

  const getPreviousCommand = useCallback(() => {
    if (commandHistory.length === 0) return "";
    const newIndex =
      historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);
    setHistoryIndex(newIndex);
    return commandHistory[newIndex] || "";
  }, [commandHistory, historyIndex]);

  const getNextCommand = useCallback(() => {
    if (historyIndex === -1) return "";
    const newIndex = historyIndex + 1;
    if (newIndex >= commandHistory.length) {
      setHistoryIndex(-1);
      return "";
    }
    setHistoryIndex(newIndex);
    return commandHistory[newIndex] || "";
  }, [commandHistory, historyIndex]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    runCommand,
    getPreviousCommand,
    getNextCommand,
    clearHistory,
  };
}
