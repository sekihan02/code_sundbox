import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <STitle>Styled Components</STitle>
        <SButton>fight!!!!</SButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-aroud;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  border: none;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #879bf5;
    color: #000000;
    cursor: pointer;
  }
  background-color: #0c1953;
  color: #fff;
  cursor: pointer;
`;
