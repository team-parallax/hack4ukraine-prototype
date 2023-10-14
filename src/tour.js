import {Touritem} from "./touritem";

const itemsDe = [
    {
        title: "Bleibe finden",
        subTitle: "Zuerst brauchst du eine Unterkunft",
        icon: "🏠"
    },
    {
        title: `Anmeldung`,
        icon: "🪪"
    },
    {
        title: `Amt`,
        icon: "🏛️"
    },
    {
        title: `Jobcenter`,
        icon: "💼"
    },
    {
        title: `Social`,
        icon: "📝"
    },
    {
        title: `Versicherungen`,
        icon: "🏥 "
    },
    {
        title: `Familienkasse`,
        icon: "👨‍👩‍👧‍👦"
    },
    {
        title: `Sprachkurs`,
        icon: "🗣️"
    },
    {
        title: `Tiere`,
        icon: "🐾"
    },
]
export const Tour = () => {
    return (
        <div className={"ml-4"}>
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col rounded-lg">
                <h1 className="mt-1 text-lg font-semibold text-slate-900 md:text-2xl">
                    Alles was du für einen guten Start brauchst:
                </h1>
            </div>
            <ul
                aria-label="Colored activity feed"
                role="feed"
                className="relative flex flex-col gap-12  py-4 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
            >
                {itemsDe.map((item, index) => <Touritem {...item} index={index}/>)}
            </ul>
            {/*<!-- End Colored Activity feed --> */}
        </div>
    )
}