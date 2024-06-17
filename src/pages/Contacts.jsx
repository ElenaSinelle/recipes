import { useNavigate, useLocation } from "react-router-dom";

export default function Contacts() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h4>
        You can contact us at{" "}
        <a href="https://github.com/ElenaSinelle" target="_blank">
          this page
        </a>
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button
          className="btn"
          style={{ width: "10rem" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <br />
        <button
          className="btn"
          style={{ width: "10rem" }}
          onClick={() => navigate(+1)}
        >
          Go Forward
        </button>
        <br />
        <button
          className="btn"
          style={{ width: "10rem" }}
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </>
  );
}
