import {SmallBadge} from "./badge";
import VoteButtons from "./vote"
import {useStateValue} from "./state"
import {ar} from "@faker-js/faker";

export default function ListItem({movie}) {
    const {
        state, setState
    } = useStateValue()
    return (
        <article
            className="flex items-start space-x-3 p-3">
            <div className="flex flex-row items-center justify-center h-full">
                <VoteButtons rating={movie.starRating}/>
            </div>
            <div className="min-w-0 relative flex-auto">
                <h2
                    onClick={() => {
                        setState(state => ({...state, showArticle: movie, currentPage: "article"}))
                    }}
                    className="font-semibold text-slate-900 pr-10">{movie.title}</h2>
                <dl className="flex flex-wrap text-sm leading-6 font-medium">
                    {/*
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
                <svg width="16" height="20" fill="currentColor">
                  <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
              </dt>
              <dd>{movie.starRating}</dd>
            </div>
            */}


                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        {movie.isHot ? "🔥" : ""}
                        {movie.isPinned ? "📌" : ""}
                    </div>
                    {/*
            <div className=" mb-2">
                <span  className="text-slate-400 text-sm leading-1">
                    There are many variations of passages of Lorem Ipsum available.
                </span>
            </div>
            */}
                    {/*
            <div className="flex-none w-full pt-1 pb-2 font-normal">

            </div>
            */}
                    <div className="flex flex-col flex-wrap mt-1">
                        <dd className="text-slate-400 text-xs">{movie.location ? `${movie.location}, ` : ""}{movie.date}{movie.openingHours ? `, ${movie.openingHours}` : ""}</dd>
                        <dd className="mt-1 text-slate-400 text-xs">{movie.rating.map(r => (
                            <SmallBadge emoji={r.emoji} text={r.text}/>))}</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}