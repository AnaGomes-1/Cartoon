import styled from "styled-components"

export const Section = styled.section`
background-color: #464646;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const Card = styled.div`
width: 40%;
display: flex;
justify-content: space-around;
align-items: center;
color: white;
margin: 0.5rem;
`

export const Section2 = styled.section`
background-color: #EDD820;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
text-align: center;
flex-direction: column;
`
export const CardManha = styled.div`
width: 40%;
height: 10vh;
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 0.5rem;

&:hover{
    background-color: white;
    font-size: 1.2rem;
    font-weight: 800;
    color: red;

}
`