import Number from "./Number";
import numeri from "../data/numbers.js"


function Main() {

    return (
        <main>
            <div className="container w-75 d-flex justify-content-center">
                <div className="row d-flex g-2 w-50">
                    {numeri.map((numero) => <Number key={crypto.randomUUID()} number={numero} />)}

                </div>
                <div className="w-25">
                    <h5 className="text-center">Ultimo numero estratto</h5>
                    <div id="result"></div>
                    <hr />
                    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <button id="estrai" className="px-3">Estrai</button>
                        <button id="termina-gioco" className="px-3">Termina gioco</button>
                    </div>
                </div>

            </div>



        </main>
    )
}


export default Main;