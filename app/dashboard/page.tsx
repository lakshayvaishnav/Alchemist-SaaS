"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function dashboard () {
    const router = useRouter();
    useEffect(()=> {
        router.push("/dashboard/profile")
    })
    return (
        <div className="flex justify-center items-center w-full h-full bg-neutral-900">
            <h1>
        Loading...
            </h1>
        </div>
    )
}