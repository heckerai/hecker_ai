import "./MainPage.scss";
import { useState } from "react";
import TabSelector from "../Components/TabSelector/TabSelector";
import AIValidationChat from "../Components/ChatComponents/AIValidationChat";
import ValidateChat from "../Components/ChatComponents/ValidateChat";
import GenerateChat from "../Components/ChatComponents/GenerateChat";
import AIGenerationChat from "../Components/ChatComponents/AIGenerationChat";

const MainPage = () => {
    const [leftSelectedTab, setLeftSelectedTab] = useState(0);
    const [rightSelectedTab, setRightSelectedTab] = useState(0);

    const selectValidationMode = () => {
        setLeftSelectedTab(0);
        setRightSelectedTab(0);
    };

    const selectGenerationMode = () => {
        setLeftSelectedTab(1);
        setRightSelectedTab(1);
    };

    return (
        <div className="main-page-container">
            <div className="chat-wrap left">
                <div className="chat-menues-container">
                    <TabSelector
                        tabs={["Validate Code", "Generate Code"]}
                        selectHandlers={[selectValidationMode, selectGenerationMode]}
                        selectedTabIndex={leftSelectedTab}
                    />
                </div>
                <div className="chat-body-container">{leftSelectedTab === 0 ? <ValidateChat /> : <GenerateChat />}</div>
            </div>

            <div className="chat-wrap right">
                <div className="chat-menues-container">
                    <TabSelector
                        tabs={["Validation result", "Generation result"]}
                        selectHandlers={[selectValidationMode, selectGenerationMode]}
                        selectedTabIndex={rightSelectedTab}
                    />
                </div>
                <div className="chat-body-container">
                    {leftSelectedTab === 0 ? <AIValidationChat /> : <AIGenerationChat />}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
