import { useEffect } from "react"

export default function Button() {
    useEffect(() => {
        console.log("After Render Button")
        return () => {
            console.log("Component Button will Unmount")
        }
    })
    return (
        <h1>Button Components</h1>
    )

}