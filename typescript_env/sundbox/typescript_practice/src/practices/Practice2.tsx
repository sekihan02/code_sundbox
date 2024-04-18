export const Practice2 = () => {
  const calcTotalFree = (num: number): number => {
    const total = num * 10;
    console.log(total);
    return total;
  };
  const onClickPractice = () => alert(calcTotalFree(0.1));
  return (
    <div>
      <p>返却値の型指定</p>
      <button onClick={onClickPractice}>練習の実行</button>
    </div>
  );
};
