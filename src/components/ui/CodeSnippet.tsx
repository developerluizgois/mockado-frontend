"use client";

import React, { useState } from "react";
import { CopyIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ExpandableCodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<ExpandableCodeSnippetProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-[#1D1F21] p-4 flex items-center justify-between rounded-md">
      <code className="text-[#c1c1c1]">{code}</code>
      {copied ? (
        <span style={{ color: "#c1c1c1" }}>Copiado!</span>
      ) : (
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <span style={{ cursor: "pointer" }}>
            <CopyIcon className="w-6 h-6 text-[#c1c1c1]" />
          </span>
        </CopyToClipboard>
      )}
    </div>
  );
};

export default CodeSnippet;
