import { useState } from "react";
import "./styles.css";
import { ChileArea } from "./components/ChildArea";

export default function App() {
  const [text, setText] = useState("入力してください。");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChileArea open={open}/>
    </div>
  );
}
