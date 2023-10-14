import {faker} from "@faker-js/faker"

export const Article = ({article}) => {
    console.log(article)
    return (
        <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div class="relative p-3 col-start-1 row-start-1 flex flex-col rounded-lg">
                <h1 class="mt-1 text-lg font-semibold text-slate-900 md:text-2xl">{article.title}</h1>
                <p className="mt-2 text-sm leading-4 font-medium text-slate-500">
                    {article.rating.map(r => <span
                        class="mt-1 mb-1 mr-1 p-1 ring-1 ring-slate-200">{`${r.emoji} ${r.text}`}</span>)}
                </p>
            </div>
            <dl class="mt-1 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt class="sr-only">Reviews</dt>
                <dd class="mx-3 text-indigo-600 flex items-center dark:text-indigo-400">
                    <svg width="24" height="24" fill="none" aria-hidden="true"
                         class="mr-1 stroke-current dark:stroke-indigo-500">
                        <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{article.starRating}</span>
                </dd>
                {
                    article.location && (
                        <>
                            <dt className="sr-only">Location</dt>
                            <dd className="flex items-center">
                                <svg width="2" height="2" aria-hidden="true" fill="currentColor"
                                     className="mx-3 text-slate-300">
                                    <circle cx="1" cy="1" r="1"/>
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round"
                                     className="mr-1 text-slate-400 dark:text-slate-500"
                                     aria-hidden="true">
                                    <path
                                        d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"/>
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                                {article.location}<br/>{article.address ?? ""} {article.openingHours ? `, ${article.openingHours}` : ""}
                            </dd>
                        </>
                    )
                }
            </dl>
            <div className="px-3">
                <div
                    class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                </div>
                <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    {faker.lorem.lines(20)}
                </p>
            </div>
        </div>
    )
}