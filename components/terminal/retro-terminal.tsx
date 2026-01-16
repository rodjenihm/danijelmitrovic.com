"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminal } from "./terminal-provider";
import { useTerminalCommands } from "./use-terminal-commands";
import { TerminalOutput } from "./terminal-output";
import { TerminalInput } from "./terminal-input";

export function RetroTerminal() {
  const { isOpen, close } = useTerminal();
  const { history, runCommand, getPreviousCommand, getNextCommand } =
    useTerminalCommands(close);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && close()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed inset-4 z-[101] m-auto flex h-[80vh] max-h-[600px] w-full max-w-2xl flex-col overflow-hidden rounded-lg shadow-2xl outline-none md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              >
                {/* Screen reader only title and description */}
                <Dialog.Title className="sr-only">
                  Terminal Emulator
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  A retro terminal interface. Type help for available commands.
                  Press Escape to close.
                </Dialog.Description>

                {/* Terminal window */}
                <div className="terminal-crt relative flex h-full flex-col overflow-hidden rounded-lg bg-[var(--terminal-bg)]">
                  {/* Window chrome (title bar) */}
                  <div className="flex items-center gap-2 border-b border-[var(--terminal-dim)] bg-[#1a1a1a] px-4 py-3">
                    {/* macOS-style buttons */}
                    <button
                      onClick={close}
                      className="terminal-window-btn terminal-window-btn-close"
                      aria-label="Close terminal"
                    />
                    <button
                      className="terminal-window-btn terminal-window-btn-minimize"
                      aria-label="Minimize (disabled)"
                      disabled
                    />
                    <button
                      className="terminal-window-btn terminal-window-btn-maximize"
                      aria-label="Maximize (disabled)"
                      disabled
                    />
                    {/* Title */}
                    <span className="ml-4 font-mono text-xs text-[var(--terminal-dim)]">
                      guest@portfolio: ~
                    </span>
                  </div>

                  {/* Terminal content */}
                  <TerminalOutput history={history} />

                  {/* Input */}
                  <TerminalInput
                    onSubmit={runCommand}
                    onHistoryUp={getPreviousCommand}
                    onHistoryDown={getNextCommand}
                  />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
