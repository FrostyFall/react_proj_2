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

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 110px 30px 0;
  border: 2px solid #ff0080;
  border-radius: 10px;
  min-height: 380px;
  max-width: 900px;
  padding: 40px 45px;
  gap: 30px;
  background: #000;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border: 2px solid #ff0080;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 20px;
  color: #fff;
  width: 100%;
  height: 50px;
  background: #000;

  &:hover {
    color: #fff;
  }
  
  &::placeholder {
    color: #5d5d5d;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 35px;
`;

export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ff0080;
  width: 180px;
  height: 50px;
  border: none;
  cursor: pointer;
  margin: 10px auto 0;
  font-size: 20px;
  color: #fff;
`;
