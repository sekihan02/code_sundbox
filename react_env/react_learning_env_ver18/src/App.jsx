import { useState } from "react";
import { ColorfulMessage } from "./conmponents/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCuntUp = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <>
      <h1 style={{ color: "navy" }}>Hello React</h1>
      <ColorfulMessage color="blue">今日はいい天気ですね</ColorfulMessage>
      <ColorfulMessage color="green">そうですか？</ColorfulMessage>
      <button onClick={onClickCuntUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
