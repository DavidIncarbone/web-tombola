import { useState, useEffect } from "react";
import Number from "./Number";
import numeri from "../data/numbers.js";
import ExtractButton from "./ExtractButton.jsx";


function Main() {

    const [extractedNumber, setExtractedNumber] = useState();



    function extractor(max) {
        setExtractedNumber(Math.floor(Math.random() * max + 1));
    }

    return (
        <main>
            <div className="container w-75 d-flex justify-content-center">
                <div className="row d-flex g-2 w-50">
                    {numeri.map((numero) => <Number key={crypto.randomUUID()} number={numero} />)}

                </div>
                <div className="w-25">
                    <h5 className="text-center">Ultimo numero estratto</h5>
                    <div id="result" className="d-flex justify-content-center align-items-center">
                        <b>{extractedNumber}</b>
                    </div>
                    <hr />
                    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <ExtractButton extractor={() => extractor(90)} />
                        <button id="termina-gioco" className="px-3">Termina gioco</button>
                    </div>
                </div>

            </div>



        </main>
    )
}


export default Main;