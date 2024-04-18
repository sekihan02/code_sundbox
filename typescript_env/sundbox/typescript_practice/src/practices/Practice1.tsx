export const Practice1 = () => {
  const calcTotalFree = (num: number) => {
    const total = num * 10;
    console.log(total);
    return total;
  };
  const onClickPractice = () => alert(calcTotalFree(0.1));
  return (
    <div>
      <p>引数の型指定</p>
      <button onClick={onClickPractice}>練習の実行</button>
    </div>
  );
};
