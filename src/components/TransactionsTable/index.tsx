import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  }, []);

  console.log(transactions);
  

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