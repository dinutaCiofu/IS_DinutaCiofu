import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import {
  buttonStyle,
  mainDivStyle,
  programTableStyle,
  buttonContainerStyle,
} from "./Program.styles";

type ProgramProps = {
  onCancel: () => void;
};

const Program: React.FC<ProgramProps> = ({ onCancel }) => {
  const [programDetails, setProgramDetails] = useState<string[][]>([]);

  useEffect(() => {
    // incarca detaliile programului salvate anterior in localStorage
    const storedProgramDetails = localStorage.getItem("programDetails");
    if (storedProgramDetails) {
      setProgramDetails(JSON.parse(storedProgramDetails));
    } else {
      // daca nu exista detalii in localStorage, initializam programul cu un rand si sapte coloane
      setProgramDetails([Array(7).fill("")]);
    }
  }, []);

  const handleSaveProgram = () => {
    // se salveaza detaliile programului in localStorage
    localStorage.setItem("programDetails", JSON.stringify(programDetails));
  };

  const handleCellChange = (
    value: string,
    rowIndex: number,
    colIndex: number
  ) => {
    const updatedProgram = [...programDetails];
    updatedProgram[rowIndex] = [...(updatedProgram[rowIndex] || [])];
    updatedProgram[rowIndex][colIndex] = value;
    setProgramDetails(updatedProgram);
  };

  return (
    <div style={mainDivStyle}>
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
                  <TableCell key={colIndex}>
                    <TextField
                      value={cell || ""}
                      onChange={(e) =>
                        handleCellChange(e.target.value, rowIndex, colIndex)
                      }
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={buttonContainerStyle}>
        <Button
          variant="contained"
          onClick={handleSaveProgram}
          style={buttonStyle}
        >
          Salvează Program
        </Button>
        <Button variant="contained" onClick={onCancel} style={buttonStyle}>
          Anulează
        </Button>
      </div>
    </div>
  );
};

export default Program;
