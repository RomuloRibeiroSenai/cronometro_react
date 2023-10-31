import '../Botao/styles.css';
import React from 'react';
import '../../assets/audio/dog.wav'

function Botao(props){
    return(
        <button className={props.className} onClick={props.onClick} >{props.nome}</button>
    );
}

export default Botao;