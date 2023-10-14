import {useStateValue} from "./state";

export const Banner = ({
    showBanner = true,
    closeBannerHandler
                       }) => {
    const {
        state, setState
    } = useStateValue()
    return (
        <>
                <div className={`bg-blue-500 text-white w-full transform transition-all duration-300 ${showBanner ? "p-1  opacity-100" : 'h-0 opacity-0'}`}>
                    <div className="container mx-auto p-2 flex justify-between">
                        <a
                            className={"underline"}
                            onClick={() => setState(state => ({...state, currentPage: "tour"}))}
                            href={"#"}
                        >Neu in 🇩🇪 ? Hier die wichtigsten Infos</a>
                        <button onClick={closeBannerHandler}><svg width="24" height="24" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2"/>
                            <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2"/>
                        </svg></button>
                    </div>
                </div>
        </>
    )
}