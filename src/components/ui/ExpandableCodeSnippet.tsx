import React, { useState } from "react";
import { CopyIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ExpandableCodeSnippetProps {
  code: string;
}

const ExpandableCodeSnippet: React.FC<ExpandableCodeSnippetProps> = ({
  code,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-[#1D1F21] rounded-md p-4">
      <div className="cursor-pointer w-full flex justify-end">
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <span>{copied ? "Copiado!" : <CopyIcon className="w-6 h-6" />}</span>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        customStyle={{ backgroundColor: "#1D1F21" }}
        language="jsx"
        style={tomorrowNight}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default ExpandableCodeSnippet;
