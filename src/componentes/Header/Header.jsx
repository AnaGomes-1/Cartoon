import React from "react";
import * as S from "./StyleHeader.jsx"

import LogoCartoon from "./imagensHeader/cn.png"
import Jogos from "./imagensHeader/jogos.png"
import Programacao from "./imagensHeader/relogio.png"

function Header(){
    return(
        <S.HeaderStyle>
            <img src={LogoCartoon} alt="" />

            <S.Section>
                <S.Div>
                    <img src={Jogos} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <img src={Programacao} alt=""/>
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>
            </S.Section>

        </S.HeaderStyle>
    )
}

export default Header