import { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.div`
    position: fixed;
    z-index: 0;
    top: 0;
`


function getWindowDimensions() {
    const { innerWidth, innerHeight } = window
    return {
        width: innerWidth,
        height: innerHeight
    }
}
// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src
}

function BGImage() {
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()

    useEffect(() => {
        const { width, height } = getWindowDimensions()
        setWidth(width)
        setHeight(height)
    }, [])

    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimensions()
            setWidth(width)
            setHeight(height)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return width && height && <Box> <Image src='/portada.jpg' width={width} height={height} loader={customLoader} /></Box>
}

export default BGImage