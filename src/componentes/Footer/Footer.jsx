import React from "react"
import Wb from "./ImagensFooter/wb.png"
import Github from "./ImagensFooter/github.png"
import Linkedin from "./ImagensFooter/linkedin.png"
import * as S from "./StyleFooter.jsx"

export default function Footer(){
    return(
        <footer>
            <S.PrimeiraSectionFooter>
                <img src={Wb} alt="" />

                <S.ListFooter>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.ListFooter>

                <S.RedesSociais>
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                </S.RedesSociais>

            </S.PrimeiraSectionFooter>

    <S.SegundaSectionFooter>
        <S.Creditos>© 2024 Cartoon Network</S.Creditos>
    </S.SegundaSectionFooter>
          
        </footer>
    )
}