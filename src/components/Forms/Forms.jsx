import TextField from '../TextField/TextField'
import './Forms.css'

const Form = () => {
    return (
        <section className="forms">
            <form>
                <h2>Preecha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form