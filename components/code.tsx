"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

const Code: React.FC<CodeProps> = ({ children, className, inline }) => {
  const language = className?.replace(/language-/, "") || "";

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  if (inline) {
    return (
      <code className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded text-sm"
      >
        {isCopied ? "Copied!" : <FiCopy />}
      </button>
      <SyntaxHighlighter language={language} style={dracula} showLineNumbers>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
