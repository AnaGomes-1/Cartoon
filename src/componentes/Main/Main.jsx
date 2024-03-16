import React, {useState} from "react"
import Scooby from "./ImagensMain/Scooby.png"
import Ben10 from "./ImagensMain/Ben10.png"
import Looney from "./ImagensMain/Looney.png"

import Gumball from "./ImagensMain/Gumball.png"
import Meninas from "./ImagensMain/MeninasS.png"
import TomJerry from "./ImagensMain/TomJerry.png"


import * as S from "./StyledMain.jsx"
import Programacao from "../Programacao/Programacao.jsx"

function Main(){

const [galeria, setGaleria] = useState([
    Gumball,
    Meninas,
    TomJerry

])
    return(
        <main>
            <S.PrimeiraSection>
                <img src={Scooby} alt="" />
                <img src={Ben10} alt="" />
                <img src={Looney} alt="" />
            </S.PrimeiraSection>

            <S.SegundaSection>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}
            </S.SegundaSection>

            <Programacao />
        </main>
    )

}

export default Main