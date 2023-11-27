"use client";
import parse from "html-react-parser";
// @ts-nocheck
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-php";
// import "prismjs/components/prism-php";
// import "prismjs/components/prism-c";
// import "prismjs/components/prism-cpp";
// import "prismjs/components/prism-python";
// import "prismjs/plugins/line-numbers/prism-line-numbers.js";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { useEffect } from "react";
const ParseHtml = ({ content }: { content: string }) => {
  useEffect(() => {
    // setTimeout(() => {
    Prism.highlightAll();
    // }, 0);
  }, []);
  return <div>{parse(content)}</div>;
};

export default ParseHtml;
