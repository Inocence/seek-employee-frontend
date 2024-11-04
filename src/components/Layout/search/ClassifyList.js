import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ClearToast from "../../common/ClearToast";

const ClassifyList = ({ searchInput }) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isFirst, setIsFirst] = useState(false);
    const outRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!isFirst && inputValue) {
            setIsFirst(true);
            handleScrollTop();
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [inputValue]);

    const handleClear = () => {
        setIsFirst(false);
        setInputValue("");
        setIsMouseOn(false);
    };

    const handleScrollTop = () => {
        outRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const handleInput = (value) => {
        setInputValue(value);
    }


    const handleMouseEnter = () => {
        setIsMouseOn(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOn(false);
    };

    return (
        <div
            className={classNames([
                'w-full relative',
                isFirst ? 'z-50' : '',
            ])}
            ref={outRef}
        >
            {isFirst && <div className="fixed inset-0 bg-black bg-opacity-50"></div>}
            <div className="relative">
                <input
                    type="text"
                    readOnly
                    placeholder='Any Classification'
                    className={classNames([
                        searchInput,
                        "hover:cursor-pointer"
                    ])}
                    onChange={e => handleInput(e.target.value)}
                    value={inputValue}
                    ref={inputRef}
                />
                {inputValue && <div
                    className={classNames([
                        "absolute flex justify-center items-center right-0 top-1/2 -translate-y-1/2 -translate-x-3 hover:cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8",
                    ])}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClear}
                ><i className="fa-solid fa-xmark"></i></div>}
                {isMouseOn && <ClearToast />}
            </div>
            {inputValue && <div className={classNames([
                'w-full rounded-md bg-white flex flex-col absolute top-full translate-y-3 left-0 overflow-y-scroll h-48 shadow-md',
            ])}>
                <div className={classNames([
                    "flex flex-col",
                ])}>
                    <div>
                        <div>
                            <div>
                                <input type="checkbox" value="accounting" />
                                <span>Accounting</span>
                            </div>
                            <div>6095</div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <input type="checkbox" value="accounting" />
                                    <span>All Accounting</span>
                                </div>
                                <div>6095</div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <input type="checkbox" value="accounting" />
                                        <span>All Accounting</span>
                                    </div>
                                    <div>615</div>
                                </div>
                                <div>
                                    <div>
                                        <input type="checkbox" value="accounting" />
                                        <span>All Accounting</span>
                                    </div>
                                    <div>235</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ClassifyList;