const CommonCenterDiv = (props) => {
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "true",
    }}
  >
    {props.children}
  </div>;
};

export default CommonCenterDiv;
