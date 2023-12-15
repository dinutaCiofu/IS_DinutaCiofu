import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getStartedButtonStyle } from "../HomePage.styles";
import { useNavigate } from "react-router-dom";

const IntroductionSection: React.FC = () => {
  const navigate = useNavigate();
  const login = (event: any): void => {
    navigate("/Login");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <Typography variant="h3" gutterBottom>
        Bine ați venit la CineBook
      </Typography>
      <Typography variant="body2">
        Oferim cele mai noi și captivante filme într-o atmosferă confortabilă.
      </Typography>
      <Button style={getStartedButtonStyle} onClick={login} variant="contained">
        Începeți
      </Button>
    </div>
  );
};

export default IntroductionSection;
