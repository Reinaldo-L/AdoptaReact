import './styles.css'

const header = (props) => {
    return (
        <header className="my-header">
            <h1>Rescatar y reubicar hasta que no quede ni un perro sin hogar. <br /> Adopta hoy, dia  {props.day}</h1>
        </header>
    )
}

export default header