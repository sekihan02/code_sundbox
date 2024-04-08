export const ColorfulMessage = ({ color, children }) => {
  const contentStyle = {
    color,
    fontsize: "16px",
  };
  return <p style={contentStyle}>{children}</p>;
};
