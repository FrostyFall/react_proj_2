import styled from "styled-components";

export const Wrapper = styled.div<{ $isActive: Boolean }>`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000060;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ff0080;
  border-radius: 10px;
  width: 596px;
  height: 280px;
  background: #000;
  padding: 40px;
  gap: 30px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border: 2px solid #ff0080;
  border-radius: 10px;
  background: #000;
  color: #5d5d5d;
  font-size: 20px;
  height: 50px;
  padding: 0 20px;
`;

export const ErrorText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  color: #fff;
`;
