import React, {useState} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Codeblock.scss";

function CodeBlock({code, lang}) {
  const [copySuccess, setCopySuccess] = useState("");
  //   const codeString = `
  //     public class HelloWorld {
  //       public static void main(String[] args) {
  //         System.out.println("Hello, world!");
  //       }
  //     }
  //   `;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopySuccess("복사 완료!");
        setTimeout(() => setCopySuccess(""), 1000);
      })
      .catch(err => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <div className="codeblock">
      <div className="codeblocklang">
        <p>{lang}</p>
      </div>
      <button onClick={handleCopy} className="copy">
        {copySuccess ? (
          <span className="checkmark">✔️</span>
        ) : (
          <svg
            xmlSpace="preserve"
            style={{enableBackground: "new 0 0 512 512"}}
            viewBox="0 0 6.35 6.35"
            height="20"
            width="20"
          >
            <g>
              <path
                fill="currentColor"
                d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
              />
            </g>
          </svg>
        )}
      </button>
      <div className="codeblock">
        <SyntaxHighlighter
          language={lang}
          style={materialDark}
          customStyle={{
            fontSize: "14px",
            fontFamily: "Courier New, Courier, monospace",
            borderRadius: "8px",
            padding: "20px",
            paddingTop: "30px",
            width: "100%",
            margin: "0px"
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeBlock;
