export const ColorfulMessage = ({ color, children }) => {
  console.log("ColorfulMessage");
  const contentStyle = {
    color,
    fontsize: "16px",
  };
  return <p style={contentStyle}>{children}</p>;
};
