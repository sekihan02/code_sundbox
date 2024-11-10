/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled"

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-aroud;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8",
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>fight!!!!!</SButton>
    </div>
  );
};

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
