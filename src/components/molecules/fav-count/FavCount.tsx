"use client"

import { useRouter } from "next/navigation"
import { IconHeart } from "../../atoms/icons/icons"
import useLikeJobs from "@/hooks/useLikeJobs"
import { useEffect, useState } from "react"

export const FavCount = () => {
    const { jobIds } = useLikeJobs()
    const router = useRouter()
    const [likedCount, setLikedCount] = useState<number>(0)

    useEffect(() => {
        setLikedCount(jobIds.length)
    }, [jobIds.length])

    return (
        <button type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white bg-white rounded-lg px-2 mr-2">
            <div className="flex flex-col items-center pt-1">
                <IconHeart {...{
                    stroke: "white",
                    fill: "red",
                    m: "",
                    h: "h-8",
                    w: "w-8"
                }}
                />

                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                    {likedCount}
                </div>

                <div className=" text-sm text-red-500">キープ</div>
            </div>
        </button>
    )
}
