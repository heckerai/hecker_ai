import { useContext, useEffect, useRef } from "react";
import "./TabSelector.scss";
import { Context } from "../../main";
import { observer } from "mobx-react";

type Props = {
    tabs: string[];
    selectHandlers: Array<() => void>;
    selectedTabIndex: number;
};

const TabSelector = observer(({ tabs, selectHandlers, selectedTabIndex }: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const { windowWidth } = useContext(Context);

    useEffect(() => {
        const updateBackgroundPosition = () => {
            if (containerRef.current && bgRef.current) {
                const element = containerRef.current.childNodes[selectedTabIndex] as HTMLDivElement;
                bgRef.current.style.left = `${element.offsetLeft}px`;
                bgRef.current.style.width = `${element.offsetWidth}px`;
                console.log(element);
            }
        };
        document.fonts.ready.then(() => {
            updateBackgroundPosition();
        });
    }, [windowWidth, selectedTabIndex, containerRef.current?.offsetWidth]);

    return (
        <div className="tab-selector-container" ref={containerRef}>
            {tabs.map((tab, index) => {
                return (
                    <nav
                        className={"tab-container" + (index === selectedTabIndex ? " selected" : "")}
                        onClick={() => selectHandlers[index]()}
                        key={index}
                    >
                        <span>{tab}</span>
                    </nav>
                );
            })}
            <div className="bg" ref={bgRef}></div>
        </div>
    );
});

export default TabSelector;
