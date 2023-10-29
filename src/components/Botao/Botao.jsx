import '../Botao/styles.css'
import React from 'react';

function Botao(props){

    

    return(
        <button className={props.className} onClick={props.onClick} >{props.nome}</button>
    );
}

export default Botao;