import { useEffect, useState } from "react";
import { ColorfulMessage } from "./conmponents/ColorfulMessage";

export const App = () => {
  console.log("app");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const [added, setAdded] = useState(false);
  const onClickCuntUp = () => {
    setNum((prev) => prev + 1);
    setAdded(false);
  };
  useEffect(() => {
    if (num % 5 === 0 && num !== 0 && !added) {
      setNum((num) => num + 10);
      setAdded(true);
    }
  }, [num, added]);
  const onClickToggle = () => setIsShowFace(!isShowFace);

  return (
    <>
      <h1 style={{ color: "navy" }}>Hello React</h1>
      <ColorfulMessage color="blue">今日はいい天気ですね</ColorfulMessage>
      <ColorfulMessage color="green">そうですか？</ColorfulMessage>
      <button onClick={onClickCuntUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace ? <p>{"(>_<)"}</p> : <p>{"(≧▽≦)"}</p>}
    </>
  );
};
