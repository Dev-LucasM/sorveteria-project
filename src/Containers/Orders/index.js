import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.jpg";
import Trash from "../../assets/trash.svg";

import {
  Body,
  Container,
  Image,
  H1,
  ContainerItens,
  Button,
  Order,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        `http://localhost:3001/orders`
      );
      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBackPage(){
    navigate("/")
  }

  return (
    <Body>
      <Container>
        <Image src={Logo} />

        <H1>Pedidos</H1>

        <ContainerItens>
          <ul>
            {orders.map((order) => (
              <Order key={orders.id}>
                <div>
                  <p id="p1">{order.pedido}</p>
                  <p id="p2">{order.name}</p>
                </div>
                <button onClick={() => deleteOrder(order.id)}>
                  <Image src={Trash} />
                </button>
              </Order>
            ))}
          </ul>

          <Button onClick={goBackPage}>Voltar</Button>
        </ContainerItens>
      </Container>
    </Body>
  );
}

export default App;
