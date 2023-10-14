import {Touritem} from "./touritem";

const itemsDe = [
    {
        title: "Bleibe finden",
        subTitle: "das Ankunftszentrum",
        icon: "🏠"
    },
    {
        title: `Anmeldung`,
        subTitle: "die Meldebestätigung",
        icon: "🪪"
    },
    {
        title: `Amt`,
        subTitle: "das Sozialamt, die Ausländerbehörde für Aufenthaltserlaubnis (der Ausländerpassport)",
        icon: "🏛️"
    },
    {
        title: `Jobcenter`,
        subTitle: "die Onlineanmeldung verbraten einen Termin",
        icon: "💼"
    },
    {
        title: `Social`,
        subTitle: "für Menschen über 67 Jahre alt",
        icon: "📝"
    },
    {
        title: `Versicherungen`,
        subTitle: "AOK, BBK und weitere",
        icon: "🏥 "
    },
    {
        title: `Familienkasse`,
        subTitle: "Babys und Kindern bis 18 Jahren alt",
        icon: "👨‍👩‍👧‍👦"
    },
    {
        title: `Sprachkurs`,
        subTitle: "Sprachschulen, BAMF",
        icon: "🗣️"
    },
    {
        title: `Tiere`,
        subTitle: "die Regeln für Haustiere und Tierärzte.",
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