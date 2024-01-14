import './styles.css'

const Footer = (props) => {
    return (
        <footer className="my-footer">
            <p>Adopta un perro hoy y recibelo el dia {props.day}
            </p>
        </footer>
    )
}

export default Footer