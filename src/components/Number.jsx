

function Number({ number, id }) {

    return (
        <div key={id} id="number" className="m-2">
            {number}
        </div>
    )
}

export default Number;