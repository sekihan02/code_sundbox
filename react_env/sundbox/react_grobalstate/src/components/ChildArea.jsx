export const ChileArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
