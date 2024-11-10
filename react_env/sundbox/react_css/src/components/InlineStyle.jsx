export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-aroud",
    alignItems: "center",
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8",
  };
  const buttonStyle = {
    border: "none",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#0c1953",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Styles</p>
      <button style={buttonStyle}>fight</button>
    </div>
  );
};
