import { Container } from "./styles";

import EntradaImg from '../../assets/income.svg';
import SaidaImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { useContext, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Sumary(){
  const {transactions} = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transactions) => {
  //   if (transactions.type === 'deposit'){
  //     return acc + transactions.amount;
  //   }else {
  //     return acc - transactions.amount;
  //   }
  // }, 0);

  const summary = transactions.reduce((acc, transactions) => {
    if(transactions.type === 'deposit'){
      acc.deposits += transactions.amount;
      acc.total += transactions.amount;
    }else{
      acc.withdraws += transactions.amount;
      acc.total -= transactions.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradaImg} alt="Entradas"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={SaidaImg} alt="Entradas"/>
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
        <img src={TotalImg} alt="Entradas"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}