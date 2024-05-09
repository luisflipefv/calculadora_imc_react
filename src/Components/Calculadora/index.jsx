import { useState } from "react";
import './calculadora.css';
import "bootstrap/dist/css/bootstrap.min.css"; 

const Calculadora = () => {
    let [peso, setPeso] = useState();
    let [altura, setAltura] = useState();
    
    const retornaCalculo = () => {
        const quadradoDaAltura = altura * altura;
        const resultado = peso / quadradoDaAltura;
        const resultadoExibido = resultado * 10000;
        if(resultado < 0.0018){
            return <p>{resultadoExibido} - Abaixo do peso</p>
        }else if(resultado > 0.0018 && resultado < 0.0025) {
            return <p>{resultadoExibido} - Peso Adequdo</p>;
        } else if(resultado >= 0.0025 && resultado < 0.0029){
            return <p>{resultadoExibido} - Acima do peso</p>;
        }else if (resultado >= 0.0029 && resultado < 0.0034){
            return <p>{resultadoExibido} - Obesidade</p>;
        }else if (resultado >= 0.0034 && resultado < 0.0039){
            return <p>{resultadoExibido} - Obesidade grau I</p>
        }else if (resultado >= 0.0039 && resultado < 0.004){
            return <p>{resultadoExibido} - Obesidade grau II</p>
        }else if (resultado >= 0.004){
            return <p>{resultadoExibido} - Obesidade grau III</p>
        }
    }
    
    
    return (
        <div className="container">
            <h1>Calculadora IMC</h1>
            <input className="input form-control mb-2" placeholder="Digite o seu peso em kg (apenas números)" onChange={evento => setPeso(parseInt(evento.target.value))} />
            <input className="input form-control" placeholder="Digite a sua altra em cm (apenas números)" onChange={evento => setAltura(parseInt(evento.target.value))} /> <br />
            <p>O resultado do seu IMC é: </p>{retornaCalculo()}
            
        </div>
    )
    
}
export default Calculadora;