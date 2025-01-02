import { useState, useEffect } from "react";
import Number from "./Number";
import numeri from "../data/numbers.js";
import ExtractButton from "./ExtractButton.jsx";
import numbersStyle from "../style/Numbers.module.css";
import EndButton from "./EndButton.jsx";


function Main() {
    const [numbersCopy, setNumbersCopy] = useState(numeri);
    const [extracted, setExtracted] = useState(null);
    function extractor() {
        if (numbersCopy.length > 0) {
            const number = Math.floor(Math.random() * numbersCopy.length);
            const extractedNumber = numbersCopy[number];
            setExtracted(extractedNumber)
            setNumbersCopy(numbersCopy.filter((numero) => numero !== extractedNumber))
        } else {

            alert("Tutti i numeri sono stati estratti!")
        }
    }

    function endGame() {
        setExtracted(null);
        setNumbersCopy(numeri);
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
                        <b>{extracted}</b>
                    </div>
                    <hr />
                    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <ExtractButton extractor={() => {
                            extractor()
                            setTimeout(console.log(numbersCopy), 1000)
                        }} />
                        <EndButton reset={() => endGame()} />
                    </div>
                </div>

            </div>



        </main>
    )
}


export default Main;