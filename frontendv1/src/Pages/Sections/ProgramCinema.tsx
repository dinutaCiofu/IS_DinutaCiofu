import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { programTableStyle } from "../../components/Program/Program.styles";

const ProgramCinema: React.FC = () => {
  const [programDetails, setProgramDetails] = useState<string[][]>([]);

  useEffect(() => {
    // Incarcă detaliile programului salvate anterior în localStorage
    const storedProgramDetails = localStorage.getItem("programDetails");
    if (storedProgramDetails) {
      setProgramDetails(JSON.parse(storedProgramDetails));
    } else {
      // Dacă nu există detalii în localStorage, inițializăm programul cu un rând și șapte coloane
      setProgramDetails([Array(7).fill("")]);
    }
  }, []);

  return (
    <div>
      <h2>Program Cinematograf</h2>
      <TableContainer component={Paper} style={programTableStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Luni</TableCell>
              <TableCell>Marți</TableCell>
              <TableCell>Miercuri</TableCell>
              <TableCell>Joi</TableCell>
              <TableCell>Vineri</TableCell>
              <TableCell>Sâmbătă</TableCell>
              <TableCell>Duminică</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programDetails.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>Interval Orar</TableCell>
                {row.map((cell, colIndex) => (
                  <TableCell key={colIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProgramCinema;
