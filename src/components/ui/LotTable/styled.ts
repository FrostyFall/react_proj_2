import styled from "styled-components";

export const Wrap = styled.aside`
  background-color: var(--bg-primary);
  font-size: 1em;
  padding: 2em;
  border-radius: 10px;
  border: 1px solid var(--primary);
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 2rem;
`;

export const TableHeading = styled.span<{ $width: number }>`
  display: inline-block;
  width: ${(props) => `${props.$width}%`};
  color: rgba(93, 93, 93, 1);
`;

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
