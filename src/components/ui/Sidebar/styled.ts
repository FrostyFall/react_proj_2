import styled from "styled-components";

export const Aside = styled.aside`
  font-size: 1rem;
  background-color: var(--bg-primary);
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 4em 5em;
  min-width: 300px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
  list-style: none;
`;

export const Li = styled.li`
  color: rgba(93, 93, 93, 1);
  font-size: 1.1em;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }

  &.active {
    color: var(--primary);
  }
`;
