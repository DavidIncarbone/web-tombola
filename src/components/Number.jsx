import NumberStyle from "../style/Numbers.module.css"

function Number({ number, id }) {

    return (
        <div key={id} id="number" className="m-1">
            <b>{number}</b>
        </div>
    )
}

export default Number;