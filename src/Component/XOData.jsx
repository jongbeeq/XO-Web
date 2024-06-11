export default function XOData({ dataOfBox }) {

    const XOStyle = dataOfBox === 'X' ? ' text-red-500' : ' text-blue-500'

    return (
        <div className={'text-[50px]' + XOStyle}>{dataOfBox}</div>
    )
}
