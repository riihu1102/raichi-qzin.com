export const JobScheduleInfo = ({ isEnd }: { isEnd?: boolean }) => {
    return (
        <>
            <div className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-blue-500">
                    1h
                </span>
            </div>
            <p className="text-lg ml-3 pb-5">デート風の外撮り</p>
            <time className="block mb-3 text-sm font-normal leading-none text-gray-400 ">所要目安: 1時間</time>
            <p className="mb-4 text-base font-normal text-gray-600">監督さんとの合流後、最寄りのゲームセンター・カフェなどでデートシーンの撮影をします。</p>
        </>
    )
}