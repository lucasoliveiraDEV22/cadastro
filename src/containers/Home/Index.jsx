import React, { useState, useRef } from "react";
import axios from 'axios'
import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button
} from "./styles";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  // const users = [];
 async function addNewUser() {


  const {data: newUser} = await axios.post ("http://localhost:3001/users/",{
    name: inputName.current.value,
    age: inputAge.current.value
  })
    setUsers([
      ...users, 
      newUser
    ]);
     // console.log (newUser)
    // console.log (name, age)
    // console.log (inputName.current.value)
    // console.log (inputAge.current.value)
  }
  
 
  return(
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" ref={inputName} />
        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />
        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      
      </ContainerItems>
    </Container>
  );
}

export default App;
