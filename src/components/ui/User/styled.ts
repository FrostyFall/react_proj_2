import styled from "styled-components";

export const Wrap = styled.div`
  cursor: pointer;

  &:hover span {
    color: var(--primary);
  }
`;

export const LotField = styled.span<{ $width: number }>`
  display: inline-block;
  width: ${(props) => `${props.$width}%`};
  color: #fff;
  transition: color 0.2s;
`;
