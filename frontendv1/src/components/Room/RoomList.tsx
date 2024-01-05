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
} from "@mui/material";
import { mainDivStyle, buttonContainerStyle, buttonStyle } from "./Room.styles";

type RoomListProps = { onCancel: () => void };
type Room = {
  id: number;
  seats: number;
  name: string;
};
const RoomList: React.FC<RoomListProps> = ({ onCancel }) => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get<Room[]>(
          "http://localhost:8080/findAllRooms"
        );
        setRooms(response.data || []);
      } catch (err) {
        console.error("Error fetching rooms", err);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div style={mainDivStyle}>
      <h2>Listă Rooms</h2>
      <TableContainer
        component={Paper}
        style={{ textAlign: "center", width: "40%" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Seats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room, rowIndex) => (
              <TableRow key={room.id}>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.seats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={buttonContainerStyle}>
        <Button variant="contained" onClick={onCancel} style={buttonStyle}>
          Anulează
        </Button>
      </div>
    </div>
  );
};

export default RoomList;
