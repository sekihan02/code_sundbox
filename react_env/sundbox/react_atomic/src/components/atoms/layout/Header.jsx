import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Profile</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center; // "coenter" を "center" に修正しました
`;

const SLink = styled(Link)`
  color: #fff;         // リンクのテキストカラーもここで設定
  margin: 0 8px;
  text-decoration: none; // アンダーラインを無効にする
`;
