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
    // Incarca detaliile programului salvate anterior in localStorage
    const storedProgramDetails = localStorage.getItem("programDetails");
    if (storedProgramDetails) {
      setProgramDetails(JSON.parse(storedProgramDetails));
    } else {
      // Dacă nu exista detalii in localStorage, inițializam programul cu un rand si sapte coloane
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
