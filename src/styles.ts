import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #f5f5f5;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  max-height: 12vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  color: blueviolet;

  h1,
  h3 {
    margin: 2px 0;
  }

  h3 {
    color: red;
    margin-bottom: 50px;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

export const ChatBox = styled.div`
  width: 90%;
  height: 100%;

  max-height: 65vh;

  background-color: #fff;
  border: 5px solid #ccc;

  overflow-y: auto;
`;

export const ChatMessageBox = styled.div<{ index: number }>`
  width: 100%;

  padding: 5px 0;

  background-color: ${(props) => (props.index % 2 === 0 ? "#d6b1f8" : "#f0f0f0")};
`;

export const ChatMessage = styled.p`
  margin: 0 0 0 10px;
`;

export const ChatInputContainer = styled.div`
  width: 90%;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatInput = styled.input`
  width: 100%;

  max-width: 500px;
  height: 30px;

  outline-color: blueviolet;
`;

export const ChatButton = styled.button`
  width: 100%;
  height: 30px;

  max-width: 100px;

  margin-left: 20px;

  border: none;
  border-radius: 5px;

  background-color: blueviolet;
  color: #fff;

  cursor: pointer;

  :disabled {
    opacity: 0.5;
  }
`;
