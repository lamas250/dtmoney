import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import inComeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void; 
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const {createTransaction} = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
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
    
    <Container onSubmit={handleCreateTransaction}>
      <h2>Cadastrar transação</h2>

      <input 
        placeholder='Título'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input 
        placeholder='Valor'
        type="number"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
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
        value={category}
        onChange={e => setCategory(e.target.value)}
      />

      <button type="submit" >
        Cadastrar
      </button>

    </Container>
</Modal>
  )
}