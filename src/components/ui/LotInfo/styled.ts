import styled from "styled-components";

export const Wrapper = styled.div`
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

export const TextField = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ff0080;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 20px;
  color: #5d5d5d;
  width: 100%;
  height: 50px;

  &:hover {
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 35px;
`;

export const BidButton = styled.button`
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

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background: #000;
  border: 3px solid #ff0080;
  border-radius: 10px;
  font-size: 20px;
  color: #ff0080;
  margin: 20px 30px;

  &:hover {
    color: #fff;
  }
`;
