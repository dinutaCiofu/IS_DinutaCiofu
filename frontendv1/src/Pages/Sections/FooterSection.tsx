import React from "react";

const footerStyle: React.CSSProperties = {
  backgroundColor: "#F8E8FC",
  padding: "20px",
  textAlign: "center",
  position: "relative",
  bottom: 0,
};

const FooterSection: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>2023 Dinuta Dumitrita Ciofu. Toate drepturile rezervate.</p>
      <p>
        Pentru întrebări sau informații suplimentare, nu ezita să mă contactezi.
      </p>
      <p>
        <strong>Email:</strong> dinutaciofu@gmail.com
      </p>
      <p>
        <strong>Adresă:</strong> Universitatea Tehnică din Cluj-Napoca
      </p>
    </footer>
  );
};

export default FooterSection;
