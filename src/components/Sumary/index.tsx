import { Container } from "./styles";

import EntradaImg from '../../assets/income.svg';
import SaidaImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

export function Sumary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradaImg} alt="Entradas"/>
        </header>
        <strong>R$ 1.000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={SaidaImg} alt="Entradas"/>
        </header>
        <strong>R$ - 500</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
        <img src={TotalImg} alt="Entradas"/>
        </header>
        <strong>R$ 500</strong>
      </div>
    </Container>
  )
}