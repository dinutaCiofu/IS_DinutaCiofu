import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CinemaSeat from "../../Img/CinemaSeat.png";
import OnlineBooking from "../../Img/OnlineBooking.png";
import Nonstop from "../../Img/Nonstop.png";
import { seatStyle } from "./AvantajeSection.styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { bodyTextStyle, headingStyle } from "../AboutPage.styles";
import { paperStyle } from "./AvantajeSection.styles";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 330,
  height: 385,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const AvantajeSection: React.FC = () => {
  return (
    <div style={seatStyle}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <DemoPaper square style={paperStyle}>
                <img
                  src={CinemaSeat}
                  alt="fara stres"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography variant="h4" gutterBottom style={headingStyle}>
                  Fără stres
                </Typography>
                <Typography variant="body2" style={bodyTextStyle}>
                  Cumpără biletele online și ai parte de cele mai bune locuri
                  din sală. Aceste locuri sunt disponibile numai atunci când
                  achiziționați biletele online: stai unde vrei si de asemenea,
                  economisești timp înainte de începerea filmului și astfel te
                  poți bucura de o cafea bună.alături de prietenii tăi, chiar în
                  cafeneaua noastră din cinema!
                </Typography>
              </DemoPaper>
            </Grid>
            <Grid item>
              <DemoPaper square style={paperStyle}>
                <img
                  src={OnlineBooking}
                  alt="book online"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography variant="h4" gutterBottom style={headingStyle}>
                  Ultra rapid
                </Typography>
                <Typography variant="body2" style={bodyTextStyle}>
                  Nu mai e nevoie să aștepți la coadă și poți merge direct la
                  barul cinematografului sau în sala de cinema.Tot ce trebuie sa
                  faci este să arăți plasatorului nostru biletul electronic
                  primit pe e-mail sau poți veni cu el tipărit de acasa. De
                  asemenea, poți ridica biletul electronic de la unul dintre
                  ATM-urile noastre din cinema
                </Typography>
              </DemoPaper>
            </Grid>
            <Grid item>
              <DemoPaper square style={paperStyle}>
                <img
                  src={Nonstop}
                  alt="24/7"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography variant="h4" gutterBottom style={headingStyle}>
                  Disponibil
                </Typography>
                <Typography variant="body2" style={bodyTextStyle}>
                  Poti cumpara biletul online, oricand, oriunde te-ai aflat,
                  24/7. In doar cateva minute, ai locul asigurat si te poti
                  bucura alaturi de prieteni de filmul preferat.
                </Typography>
              </DemoPaper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AvantajeSection;
