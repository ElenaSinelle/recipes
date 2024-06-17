import { useNavigate } from "react-router-dom";

export default function GoBackBtn() {
  const navigate = useNavigate();
  return (
    <button className="btn" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}
