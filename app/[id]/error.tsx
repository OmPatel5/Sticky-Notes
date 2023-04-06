'use client'

import { useEffect } from "react";

export default function Error({error, reset} : {
    error: Error;
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <div className="bg-gray-700 h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-7xl">Woops! Could not find the note you were looking for.</h1>
        </div>
    )
}