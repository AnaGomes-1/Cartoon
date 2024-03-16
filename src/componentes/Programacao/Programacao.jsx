import React, {useState} from "react"
import Dexter from "./ImagensProgramacao/Dexter.png"
import VacaeFrango from "./ImagensProgramacao/VacaeFrango.png"
import Du from "./ImagensProgramacao/DuDudueEdu.png"
import Coragem from "./ImagensProgramacao/Coragem.png"
import IrmaoJorel from "./ImagensProgramacao/IrmaoJorel.png"
import TurmaM from "./ImagensProgramacao/TurmaMonica.png"
import Steven from "./ImagensProgramacao/Steven.png"
import BillyeMandy from "./ImagensProgramacao/BillyeMandy.png"

import * as S from "./StyleProgramacao.jsx"

function Programacao(){
    const [desenhos, setDesenhos] = useState([
        {nome: "Dexter", hora: "7:00h", imagem: Dexter, desenhoManha: true},
        {nome: "A Vaca e o Frango", hora: "8:00h", imagem: VacaeFrango, desenhoManha: true},
        {nome: "Du Dudu e Edu", hora: "9:00h", imagem: Du, desenhoManha: true},
        {nome: "Coragem", hora: "10:00h", imagem: Coragem, desenhoManha: true},
        {nome: "Irmão do Jorel", hora: "11:00h", imagem: IrmaoJorel, desenhoManha: true},
        {nome: "Turma da Mônica", hora: "12:00h", imagem: TurmaM, desenhoManha: false},
        {nome: "Steven", hora: "13:00h", imagem: Steven, desenhoManha: false},
        {nome: "Billy e Mandy", hora: "14:00h", imagem: BillyeMandy, desenhoManha: false},

    ])

    const desenhoAntesMeioDia = desenhos.filter((item) => item.desenhoManha === true)

    return (
        <>
        <S.Section>
            {desenhos.map((item) => (
                <S.Card>
                    <h2>{item.nome}</h2>
                    <h3>{item.hora}</h3>
                    <img src={item.imagem} alt={item.nome} />
                </S.Card>
            ))}

        </S.Section>

        <S.Section2>
            <h2>Desenhos da manhã</h2>

            {desenhoAntesMeioDia.map((item) => (
                <S.CardManha>
                    <h3>{item.nome}</h3>
                    <h3>{item.hora}</h3>
                    <img src={item.imagem} alt={item.nome} />
                </S.CardManha>
            ))}
        </S.Section2>

        </>
    )

}

export default Programacao