export const Badge = ({
    text,
    emoji
}) => (
    <span className="inline-flex bg-gray-100 mx-1 my-[0.25rem] items-center rounded-sm bg-gray-50 px-2 py-1 font-medium  text-sm text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {emoji && <span
            className="mr-1"
        >{emoji}</span>}
        <span>{text}</span>
    </span>
)
export const SmallBadge = ({
    text,
    emoji
}) => (
    <dd className="pr-1.5 ring-1 ring-slate-200 rounded-xs mr-1 text-xs whitespace-nowrap overflow-hidden inline-block mb-1">
        {emoji && <span
            className="mr-1"
        >{emoji}</span>}
        <span>{text}</span>
    </dd>
)