export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX</p>
        <button className="button">fight!!!</button>
      </div>
      <style jsx="true">{`
        .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-aroud;
            align-items: center;
        }
        
        .title {
            margin: 0;
            color: #3d84a8;
        }

        .button {
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
        }

      `}</style>
    </>
  );
};
