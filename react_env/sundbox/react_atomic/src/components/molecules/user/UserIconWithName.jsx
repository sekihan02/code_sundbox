import styled from "styled-components";
export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg src={image} alt="プロフィール" />
      <p>{name}</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
