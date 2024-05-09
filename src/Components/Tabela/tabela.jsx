import "bootstrap/dist/css/bootstrap.min.css"; 

const Tabela = () => {
    return (
        <div className="blocoTab">
            <table className="table">
                <thead>
                    <tr>
                        <th id="th-titulo">IMC</th>
                        <th id="th-titulo">Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr id="td-bg">
                        <td>menor que 18</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 18 e 24,99</td>
                        <td>Peso adequdo</td>
                    </tr>
                    <tr id="td-bg">
                        <td>Entre 25 e 29,99</td>
                        <td>Acima do Peso</td>
                    </tr>
                    <tr>
                        <td>Entre 30 e 34,99</td>
                        <td>Obesidade I</td>
                    </tr>
                    <tr id="td-bg">
                        <td>Entre 35 e 39,99</td>
                        <td>Obesidade II (severa)</td>
                    </tr>
                    <tr>
                        <td>Acima de 40</td>
                        <td>Obesidade III (Mórbida)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;
