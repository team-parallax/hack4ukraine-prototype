import React, { useState } from 'react';
import {moviesDe} from "./articles";
import {useStateValue} from "./state";
export const Touritem = ({
    title,
    subTitle,
    index,
    icon
}) => {
    const [checked, setChecked] = useState(false);
    const {
        state, setState
    } = useStateValue()
    const handleToggle = () => setChecked(!checked);
    return (
        <li role="article" className="relative pl-6 ">
          <span onClick={handleToggle} tabIndex="0" className={`focus:outline-none focus:ring-0 focus:border-transparent select-none cursor-pointer absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-white -translate-x-1/2 rounded-full ${checked ? "bg-slate-500" : "bg-emerald-500"} ring-2 ring-white transition ease-in-out duration-300 ${checked ? 'rotate-180' : ''}`}>
            {checked ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute w-10 h-10 rotate-180"
                    role="presentation"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2l4-4"
                    />
                </svg>
            ):icon  }
          </span>
            <div onClick={() => {
                setState(state => ({...state, showArticle: moviesDe[0], currentPage: "article"}))
            }} className={`flex flex-col flex-1 gap-0 ${checked ? "line-through" : ''}`}>
                <h4 className="text-sm font-medium text-slate-700">
                    {" "}
                    {index + 1}{". "}{title}{" "}
                </h4>
                {subTitle && <p className="text-xs text-slate-500">13:12pm</p>}
            </div>
        </li>
    )
}