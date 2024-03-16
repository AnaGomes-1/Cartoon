import React from "react"
import Header from "./componentes/Header/Header.jsx"
import Main from "./componentes/Main/Main.jsx"
import Footer from "./componentes/Footer/Footer.jsx"

import {createGlobalStyle} from "styled-components"

const GlobalStyled = createGlobalStyle`
  *{
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  cursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsAAADPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/NDQ0/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zc3N///////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAfn///////////////8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEB/////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuLi7///////////9ra2v/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAvf///////////////wAAAPsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8BAQH/AAAA/wEBAf8BAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/QAAAP///////////wAAAP+E3MP/AAcD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6AQEB//7+/v/Y2Nj/BAQE/4Pbwv8AAADZAAAAAAAAAAAAAAAAAAAAAAEBAvwBAQH/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQH///////////8BAQH/AAAA/wAAAAAAAAAAAAAAagAAAf/P3/j/y9/7/83f/P/N3/z/zd/8/83e+f8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP/9/f3//f39/wEBAf8ABgL/AAAAAAECAP/N3/z/zd/8/83f/P/N3/z/zd/8/83f/P/N3/z/zd/8/9Xj9P8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQH/g9zB/wAAAP8AAAD/gdzB/ylVSP8wODv/zd79/83f/P/N3/z/zt/8/8/f+v/a7P7/nqe0/1NdY/8BBgb/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQH/AAAA/5HXxP8aMyr/ydLg/8zf/P+vusX/AQEB/wAAAP8AAAH/xdLe/11lbv8BAAH/AwEB/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/j93M/2JkZP8BAQH/EhYX/8/g+v/N3/z/zd/8/8re+v+Lk53/AAAE/wEBAf+Bhoz/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQH/0d/0/83f/P/N3v3/zd/8/83f/P/M1+X/g9zA/4Pbwf+D28H/gdzB/////v//////AAAA/wAAAP8CAgL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEB/87d+v+cpK//CAoL/8/e/P/N3/z/y9/2/37bwf8ULiX/kdbD/4Tdwf+D28H/g9vB////////////AAAA/wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAf/P3/r/zd/8/83h+v/N3/z/m6W1/83f/P8cJiT/AAAA/wAAAP8AAAD/AAAA/4PcwP+D28H/g9vB///////6+vr/AAAA/wAAAP8AAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzMt/8ne+P/N3/v/zd/8/83f/P/N3/z/zt78/wAAAP86Ojr/AAAA/wAAAP8AAAD/AgIA/4Pbwf+D28H//v/+//////8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAgD/gdvB/8ze+f/N3/z/zd/8/83f/P/W5/r///////////8DAwP/AAAA/wAAAP8AAAD/gNvC/4Pbwf/5/////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8CAQD/bqaV/87f/P/N3/z/zd/8/77N3v////////////////8AAAD/AAAA/wAAAP+E28L/g9vB//P//f//////AAAA/wAAAAAAAAAAAAAAAAEBAf/J3vv/AAIC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP+G4cj/zuD8/83f/P/N3/z/zuD6//7+/f//////kZGR/wAAAP8AAAD/AQEB/4Lbw/+D28H//f/+/wAAAP8AAAD/AAAAAAAAAAAAAQD/zd/7/83f/P/N3/v/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wICAv//////AAAA/wACAP8AAwb/zd79/83f/P/N3/z/AAAA/wwMDP8AAAD/AAAA/wAAAP8BAQH/g9zA/4Dcwf8AAAD/AAAA/wACAv/T4/j/z9/6/83f/P/N3/z/zd/8/87f/P8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/MTEx//////8AAAD/AAAA/4bcwf/N3/z/zeL3/wECAP++w8f/AAAA/wAAAP8AAAD/AQEB/4XbwP+Qy73/AQEB/wAAAP8AAAD/Hx8h/8/e/P/N3/z/zd/8/83f/P/N3/z/y9fm/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD//////wICAv8AAAD/f9zC/woPDv/N3v3/zuD5/83f/P/L3vn/AAAB/wEAAP+A2cL/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAQAA/8ze+f/P3v3/z978/9Dd7f8AAAD2AAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8FFAz/zd/8/9He/P/N3/z/zd/8/83f/P/N4Pj/AQEB/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAaQAAAAAAAAAAAAAAAAAAAPkBAQH0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/3yJjv/N3/z/zd/8/83f/P/N3/z/Hh4j/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/zN35/83f/P/N3/z/zd/8/83f/P/J1+T/AAAA/wAAAP8AAAD/AAAA/wAAAP8BAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAPoAAAAAAAAAAAAAAP8BAQH/AQEB/wEAAv/P5Pn/zt/8/8/h+P8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+f////D////w////8P///+D////g////4f///0H///4D///8B////AeH//4OAf/8CAH//AAB//4AB///AAH//4AAf/8AAD/+AAAf/gAAH/wAAH/8AABx+AAAYPgAAAD4AAAB+AAAgdgAAefIAAH/wAAD/8GAB//BwB//wP3//8='), auto;
  }
`

function App(){
  return(
    <>
    <GlobalStyled />
    <Header />
    <Main />
    <Footer />
    </>
  )
}
export default App