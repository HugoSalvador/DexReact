import styled from "styled-components";


export const Cover = styled.main`
    margin: 0 auto;
    margin-top: 150px;
    width: 350px;
    height: 600px;
    border: 7px solid; 
    border-radius: 20px;
    background: #e50000;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    overflow: hidden;

    button {
        position: absolute; 
        bottom: 10px;
        right: 10px;
        width: 40px; 
        height: 40px; 
        border: 2px solid;
        border-radius: 50%;
        background-color: #49b4ff; 
       
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TopDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 3px;
    width: 60%;
    height: 15px;
    background-color: black;

`;


export const AroundDiv = styled.div`
    width: 200px;
    height: 200px;
    border: 5px solid;
    border-radius: 50%;
    background-color: #e50000;
    display: flex; /* Adicionado para usar flexbox */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
`;

export const InnerDiv = styled.div`
    width: 100px; /* Ajuste o tamanho conforme necessário */
    height: 100px; /* Ajuste o tamanho conforme necessário */
    border-radius: 50%; /* Torna a div redonda */
    background-color: black; /* Cor de fundo da div */
    display: flex;

    align-items: center;
`

export const HorizontalLine = styled.hr`
    position: absolute;
    width: 100%;
    top: 50%;
    border: 2px solid;
    border-top: 1px solid black; /* Estilo da linha horizontal */
    z-index: 2; /* Coloca a linha atrás das divs */
`;