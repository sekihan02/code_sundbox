import styled from "styled-components";
export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};
const SInput = styled.input`
  border-radius: 8px;
  /* border: none; */
  padding: 6px 16px;
`;
