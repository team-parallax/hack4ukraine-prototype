import {useStateValue} from "./state";

export const Badge = ({
    text,
    emoji
}) => {
    const {
        state, setState
    } = useStateValue()
    return (
    <span
        onClick={() => setState((state) => {
            if(state.labelEmoji.includes(emoji)) {
                return {...state, labelEmoji: state.labelEmoji.filter(e => e !== emoji)}
            }
            return {...state, labelEmoji: [...state.labelEmoji, emoji]}
        })}
        className={`inline-flex mx-1 my-[0.25rem] items-center rounded-sm ${state.labelEmoji.includes(emoji) ? "bg-blue-200" : "bg-gray-50"} px-2 py-1 font-medium  text-sm text-gray-600 ring-1 ring-inset ring-gray-500/10`}>
        {emoji && <span
            className="mr-1"
        >{emoji}</span>}
        <span>{text}</span>
    </span>
)}
export const SmallBadge = ({
    text,
    emoji
}) => (
    <dd className="pr-1.5 ring-1 ring-slate-200 rounded-xs mr-2 text-xs whitespace-nowrap overflow-hidden inline-block mb-1">
        {emoji && <span
            className="mr-1"
        >{emoji}</span>}
        <span>{text}</span>
    </dd>
)