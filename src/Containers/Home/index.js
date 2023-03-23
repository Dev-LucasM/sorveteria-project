import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo1.jpg";

import {
  Body,
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  const navigate = useNavigate()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        pedido: inputOrder.current.value,
        name: inputName.current.value,
      }
    );
    setOrders([...orders, newOrder]);

    navigate("/pedidos")
  }

  return (
    <Body>
      <Container>
        <Image src={Logo} />

        <H1>Faça seu pedido</H1>

        <ContainerItens>
          <InputLabel>Pedido</InputLabel>
          <Input ref={inputOrder} placeholder="Seu pedido" />

          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputName} placeholder="Seu nome" />

          <Button onClick={addNewOrder}>Novo pedido</Button>
        </ContainerItens>
      </Container>
    </Body>
  );
}

export default App;
