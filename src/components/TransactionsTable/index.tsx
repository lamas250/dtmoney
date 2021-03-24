import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
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
          {transactions.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td className={t.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(t.amount)}
                </td>
                <td>{t.category}</td>
                <td>{
                    new Intl.DateTimeFormat('pt-BR').format(new Date(t.createdAt))
                }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}