import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className?.replace(/language-/, "") || "";

  return (
    <SyntaxHighlighter language={language} style={dracula} showLineNumbers>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
