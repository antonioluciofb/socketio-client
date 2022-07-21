import { useState } from "react";
import { io } from "socket.io-client";
import { ChatBox, ChatButton, ChatInput, ChatInputContainer, ChatMessage, ChatMessageBox, Container, Header } from "./styles";

interface IMessage {
  text: string;
}

const socket = io(`ws://${import.meta.env.VITE_WS_URL}`);

function App() {
  const [message, setMessage] = useState("");
  const [socketMessage, setSocketMessage] = useState<IMessage[]>([]);

  socket.on("messageFront", (message) => {
    setSocketMessage([...socketMessage, { text: message }]);
  });

  const handleEmitAction = () => {
    socket.emit("messageBack", message);
  };

  return (
    <Container>
      <Header>
        <h1>Socket.io Chat Example</h1>
        <h3>Para ver em funcionamento, acesse esse mesmo site em outro navegador e envie uma mensagem</h3>
      </Header>
      <ChatBox>
        {socketMessage?.map((message, index) => (
          <ChatMessageBox index={index} key={Math.random()}>
            <ChatMessage>{message?.text}</ChatMessage>
          </ChatMessageBox>
        ))}
      </ChatBox>
      <ChatInputContainer>
        <ChatInput
          onChange={(event) => setMessage(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleEmitAction();
            }
          }}
        />
        <ChatButton disabled={!message} onClick={handleEmitAction}>
          Enviar
        </ChatButton>
      </ChatInputContainer>
    </Container>
  );
}

export default App;
