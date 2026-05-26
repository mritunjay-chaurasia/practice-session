import React, { useEffect, useState } from "react";

const ScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [window.innerWidth])

    return (
        <div>
            <h1>Size of screen : {width}</h1>
        </div>
    )
}

export default ScreenSize