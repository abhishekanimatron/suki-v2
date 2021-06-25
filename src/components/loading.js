import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Loader type="Rings" color="pink" height={70} width={70} />
    </div>
  );
}

export default Loading;
