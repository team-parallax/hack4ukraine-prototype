export const Badge = ({
    text,
    emoji
}) => (
    <span className="inline-flex bg-gray-100 mx-1 my-[0.25rem] items-center rounded-sm bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {emoji && <span
            className="mr-1"
        >{emoji}</span>}
        {text}
    </span>
)