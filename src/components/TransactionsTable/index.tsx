import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Criacao site</td>
            <td className='withdraw'>2000</td>
            <td>Dev</td>
            <td>10/10/2020</td>
          </tr>
          <tr>
            <td>AAAAAAAa site</td>
            <td className='deposit'>2000</td>
            <td>Dev</td>
            <td>10/10/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}