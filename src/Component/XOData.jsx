import usePlay from "../hooks/use-play"

export default function XOData({ dataOfBox }) {
    const { endLength } = usePlay()
    const textSize = `${60 - (5 * (endLength - 3))}px`
    const XOStyle = dataOfBox === 'X' ? ' text-red-500' : ' text-blue-500'

    const style = {
        fontSize: textSize,
    }

    return (
        <div style={style} className={XOStyle}>
            {dataOfBox}
        </div>
    )
}
