import "./ChatComponents.scss";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";
import Editor from "react-simple-code-editor";
import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react";
import copy from "copy-to-clipboard";

const AIGenerationChat = observer(() => {
    const { globalLoading, generationResult, setGenerationResult } = useContext(Context);

    const highlightCode = (code: string) => {
        const detectedLanguage = hljs.highlightAuto(code);
        return detectedLanguage.value;
    };

    const copyHandler = () => {
        if (generationResult) {
            copy(generationResult);
        }
    };

    return (
        <div className="chat-container ai-generation-chat">
            {globalLoading ? (
                <p>Loading ...</p>
            ) : (
                <>
                    <Editor
                        className="editor-container"
                        value={generationResult ?? ""}
                        onValueChange={(newCode) => setGenerationResult(newCode)}
                        highlight={highlightCode}
                        padding={10}
                        readOnly
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 14,
                            fontWeight: 600,
                            height: "100%",
                            maxHeight: "800px",
                            overflow: "scroll",
                        }}
                    />
                    {generationResult && (
                        <button className="copy-btn" onClick={copyHandler}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.1 22.75H6.9C2.99 22.75 1.25 21.01 1.25 17.1V12.9C1.25 8.99 2.99 7.25 6.9 7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V17.1C16.75 21.01 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.8 2.75 12.9V17.1C2.75 20.2 3.8 21.25 6.9 21.25H11.1C14.2 21.25 15.25 20.2 15.25 17.1V12.9C15.25 9.8 14.2 8.75 11.1 8.75H6.9Z"
                                    fill="#37EEAE"
                                />
                                <path
                                    d="M17.1 16.75H16C15.59 16.75 15.25 16.41 15.25 16V12.9C15.25 9.8 14.2 8.75 11.1 8.75H8C7.59 8.75 7.25 8.41 7.25 8V6.9C7.25 2.99 8.99 1.25 12.9 1.25H17.1C21.01 1.25 22.75 2.99 22.75 6.9V11.1C22.75 15.01 21.01 16.75 17.1 16.75ZM16.75 15.25H17.1C20.2 15.25 21.25 14.2 21.25 11.1V6.9C21.25 3.8 20.2 2.75 17.1 2.75H12.9C9.8 2.75 8.75 3.8 8.75 6.9V7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V15.25Z"
                                    fill="#37EEAE"
                                />
                            </svg>
                        </button>
                    )}
                </>
            )}
        </div>
    );
});

export default AIGenerationChat;
