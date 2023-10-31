
import '../Relogio/styles.css'

function Relogio(props) {

    return (

        <section>
            <div className='mili'>{props.minutos}:</div>
            <div className='seg'>{props.segundos}:</div>
            <div className='mili'>{props.mili}</div>
        </section>
    );
}

export default Relogio;