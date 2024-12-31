import Number from "./Number";
import numeri from "../data/numbers.js"


function Main() {

    return (
        <main className="d-flex">
            <div className="container w-50 d-flex">
                <div className="row d-flex g-2">
                    {numeri.map((numero) => <Number key={crypto.randomUUID()} number={numero} />)}

                </div>
                <div>
                    <h5>Ultimo numero estratto</h5>
                    <div></div>
                    <hr />
                    <button>Estrai</button>
                    <button>Termina gioco</button>
                </div>

            </div>



        </main>
    )
}


export default Main;