import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .width100proc {
    width: 100%;
  }
`;

export const Page = styled(Wrapper)`
  background-color: #bbbbbb;
  width: 100vw;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  width: 85%;
  max-width: 1276px;
  margin: 0 auto;
`;

export const Input = styled.input<{
  $width?: string;
  $height?: string;
  $disabled?: boolean;
}>`
  font-size: 1.5rem;
  padding: 18px 14px 19px;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "60px"};
  border: 1px solid #bbbbbb;
  border-radius: 15px;
  background-color: #eae9e9;
  transition: 0.1s linear;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "text")};
  color: ${(props) => (props.$disabled ? "#9d9d9d" : "#000")};

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bbbbbb;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bbbbbb;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bbbbbb;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: red;
`;

export const Button = styled.button<{
  $white?: boolean;
  $width?: string;
  $gray?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 60px;
  padding: 17px 24px 14px;
  border: ${(props) => (props.$white ? "5px solid #4C7BFF" : "none")};
  border-radius: 15px;
  background-color: ${(props) =>
    props.$white ? "#fff" : props.$gray ? "#B8B8B8" : "#4c7bff"};
  color: ${(props) => (props.$white ? "#000" : "#fff")};
  width: ${(props) => props.$width || "auto"};
  transition: 0.1s linear;

  &:hover {
    background-color: ${(props) =>
      props.$white ? "#fff" : props.$gray ? "#CDCDCD" : "#52A1FF"};
    border-color: ${(props) => (props.$white ? "#52A1FF" : "none")};
  }

  &:active {
    background-color: ${(props) =>
      props.$white ? "#fff" : props.$gray ? "#949494" : "#0043FF"};
    border-color: ${(props) => (props.$white ? "#0043FF" : "none")};
  }
`;

export const Label = styled.label<{ $checkbox?: boolean; $height?: string }>`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  height: ${(props) => props.$height || (props.$checkbox ? "auto" : "56px")};
`;

export const Search = styled.input`
  font-size: 1.5rem;
  padding: 7px 15px 8px 15px;
  height: 40px;
  width: 626px;
  border: 1px solid #eae9e9;
  border-radius: 10px;
  transition: 0.1s linear;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bbbbbb;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bbbbbb;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bbbbbb;
  }

  &:focus {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    outline: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 226px;
  width: 100%;
  max-height: 47px;
  height: 100%;
  color: #fff;
  font-size: 2rem;
  background-color: #4c7bff;
  border-radius: 15px;
  /* &:hover {
    background-color: #52a1ff;
  }

  &:active {
    background-color: #0043ff;
  } */
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 auto 1.5rem;
  text-align: center;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Hr = styled.hr`
  margin-bottom: 1.5rem;
  border: 0.5px solid #000;
  width: 100%;
`;

export const StarsContainer = styled.div`
  display: flex;
`;

export const StarWrapper = styled.div<{ $isActive: boolean }>`
  position: relative;
  top: -1px;
  width: 1.5rem;
  height: 1.5rem;

  path {
    fill: ${(props) => (props.$isActive ? "#1b57ff" : "#bbbbbb")};
  }
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: #fff;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 0.75em 1.5em;
  min-width: 325px;

  &::placeholder {
    color: rgba(93, 93, 93, 1);
  }
`;
