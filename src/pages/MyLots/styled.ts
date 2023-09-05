import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 2rem;
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  background-color: var(--primary);
  font-size: 1rem;
  padding: 0.75em 1.5em;
  border: 1px solid var(--primary);
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-primary);
  }
`;
