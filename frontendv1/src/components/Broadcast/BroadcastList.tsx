import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { buttonStyle, mainDivStyle } from "./Broadcast.styles";
import { buttonContainerStyle } from "../Program/Program.styles";

type Broadcast = {
  id: number;
  date: string;
  price: number;
  movie: {
    id: number;
    title: string;
  };
  room: {
    id: number;
    name: string;
  };
};

type BroadcastListProps = {
  onCancel: () => void;
};

const BroadcastList: React.FC<BroadcastListProps> = ({ onCancel }) => {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [selectedBroadcastId, setSelectedBroadcastId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        const response = await axios.get<Broadcast[]>(
          "http://localhost:8080/getAllBroadcasts"
        );
        setBroadcasts(response.data || []);
      } catch (err) {
        console.error("Error fetching broadcasts", err);
      }
    };

    fetchBroadcasts();
  }, []);

  const handleDeleteBroadcast = async () => {
    if (selectedBroadcastId !== null) {
      try {
        await axios.delete(
          `http://localhost:8080/deleteBroadcastById/${selectedBroadcastId}`
        );
        const response = await axios.get<Broadcast[]>(
          "http://localhost:8080/getAllBroadcasts"
        );
        setBroadcasts(response.data || []);
        setSelectedBroadcastId(null);
        alert(`Broadcast with ID ${selectedBroadcastId} deleted successfully`);
      } catch (err) {
        console.error("Error deleting broadcast", err);
      }
    }
  };

  return (
    <div style={mainDivStyle}>
      <h2>Listă Broadcasts</h2>
      <TableContainer
        component={Paper}
        style={{ textAlign: "center", width: "80%" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Preț</TableCell>
              <TableCell>Film</TableCell>
              <TableCell>Sala</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {broadcasts.map((broadcast, rowIndex) => (
              <TableRow
                key={broadcast.id}
                onClick={() => {
                  //   console.log(broadcast.id);
                  setSelectedBroadcastId(broadcast.id);
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedBroadcastId === broadcast.id
                      ? "#E592FA"
                      : "inherit",
                }}
              >
                <TableCell>{broadcast.date}</TableCell>
                <TableCell>{broadcast.price}</TableCell>
                <TableCell>{broadcast.movie.title}</TableCell>
                <TableCell>{broadcast.room.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={buttonContainerStyle}>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={handleDeleteBroadcast}
        >
          Sterge Broadcast
        </Button>
        <Button variant="contained" onClick={onCancel} style={buttonStyle}>
          Anulează
        </Button>
      </div>
    </div>
  );
};

export default BroadcastList;
