import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenNewTransactionModal: () => void;
}

export function Header({handleOpenNewTransactionModal}: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo dtmoney" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>


      </Content>
    </Container>
  )
}