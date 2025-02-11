import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

const Code: React.FC<CodeProps> = ({ children, className, inline }) => {
  const language = className?.replace(/language-/, "") || "";

  if (inline) {
    return (
      <code className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    );
  }

  return (
    <SyntaxHighlighter language={language} style={dracula} showLineNumbers>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default Code;
