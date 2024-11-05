import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const CheckRow = ({ handleCheckbox = () => { }, catetory, total, isCheck=false }) => {
    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row items-center">
                <input
                    type="checkbox"
                    value={catetory}
                    className="w-5 h-5"
                    onChange={e => handleCheckbox(e.target.value, isCheck)}
                    checked={isCheck}
                />
                <span className="px-3">{catetory}</span>
            </div>
            <div>{total}</div>
        </div>
    );
};

const ClassifyList = ({ searchInput }) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [fullCate, setFullCate] = useState([]);
    const outRef = useRef(null);

    const handleCheckbox = (value, isCheck) => {
        if(isCheck) {
            setFullCate([...fullCate, value]);
        }
    }

    const handleInput = (value, isCheck) => {
        const new_value = isCheck ? "" : value;
        setInputValue(new_value);
        setIsCheck(!isCheck);
        if(!new_value) {
            setFullCate([]);
        } else {
            setFullCate([value]);
        }
    }

    const handleFoucs = () => {
        setIsFocus(true);
        handleScrollTop();
        document.body.style.overflow = 'hidden';
    }

    const handleClear = () => {
        setIsFocus(false);
        setInputValue("");
        document.body.style.overflow = 'auto';
    };

    const handleScrollTop = () => {
        outRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <div
            className={classNames([
                'w-full relative',
                isFocus ? 'z-50' : '',
            ])}
            ref={outRef}
        >
            {isFocus && <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClear}></div>}
            <div className="relative hover:cursor-pointer">
                <input
                    type="text"
                    readOnly
                    placeholder='Any Classification'
                    className={classNames([
                        searchInput,
                        "hover:cursor-pointer"
                    ])}
                    onFocus={handleFoucs}
                />
                <div
                    className={classNames([
                        "absolute flex justify-center items-center top-1/2 -translate-y-1/2 -translate-x-3 rounded-full h-8 w-8",
                        isCheck ? "right-8" : "right-0",
                    ])}>
                    <i className={classNames([
                        "fa-solid fa-chevron-down duration-300",
                        isFocus ? "rotate-180" : "",
                    ])}></i>
                </div>
                {inputValue && <div
                    className={classNames([
                        "absolute flex justify-center items-center right-0 top-1/2 -translate-y-1/2 -translate-x-3 hover:cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8",
                    ])}
                    onClick={handleClear}
                ><i className="fa-solid fa-xmark"></i></div>}
            </div>
            {isFocus && <div className={classNames([
                'w-full rounded-md bg-white flex flex-col absolute top-full translate-y-3 left-0 overflow-y-scroll h-64 shadow-md',
            ])}>
                <div className={classNames([
                    "flex flex-col p-3",
                ])}>
                    <div>
                        <CheckRow handleCheckbox={handleInput} isCheck={isCheck} catetory={"Information"} total={6095} />
                        <div className="pl-6">
                            <CheckRow handleCheckbox={handleInput} isCheck={isCheck} catetory={"All information"} total={6095} />
                            <div>
                                <CheckRow handleCheckbox={handleCheckbox} catetory={"Computer operators"} total={418} />
                                <CheckRow handleCheckbox={handleCheckbox} catetory={"Developters"} total={203} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ClassifyList;