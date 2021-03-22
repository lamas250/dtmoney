import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import inComeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void; 
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [type, setType] = useState('deposit');

  function handleTypeSelect(){

  }

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    className='react-modal-content'
    overlayClassName='react-modal-overlay'
  >

    <button 
      type='button'
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>
    
    <Container>
      <h2>Cadastrar transação</h2>

      <input 
        placeholder='Título'

      />

      <input 
        placeholder='Valor'
        type="number"
      />

      <TransactionTypeContainer>
        <RadioBox 
          type="button"
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={inComeImg} alt="Entrada type" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox 
          type="button"
          className=""
          onClick={() => {setType('withdraw')}}  
          isActive={type === 'withdraw'}
          activeColor="red"
        >
          <img src={outComeImg} alt="Saida type" />
          <span>Saida</span>
        </RadioBox>
      </TransactionTypeContainer>

     <input 
        placeholder='Categoria'
        
      />

      <button type="submit" >
        Cadastrar
      </button>

    </Container>
</Modal>
  )
}