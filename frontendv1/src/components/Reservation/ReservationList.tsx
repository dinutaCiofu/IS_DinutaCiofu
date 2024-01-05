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
import {
  buttonContainerStyle,
  buttonStyle,
  mainDivStyle,
} from "./Reservation.styles";
type Reservation = {
  id: number;
  user: {
    id: number;
    firstName: string;
    lastName: string;
  };
  broadcast: {
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
};

const ReservationList: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedReservationId, setSelectedReservationId] = useState<
    number | null
  >(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get<Reservation[]>(
          "http://localhost:8080/findAllReservations"
        );
        setReservations(response.data || []);
      } catch (err) {
        console.error("Error fetching reservations", err);
      }
    };

    fetchReservations();
  }, []);

  const handleDeleteReservation = async () => {
    if (selectedReservationId !== null) {
      try {
        await axios.delete(
          `http://localhost:8080/deleteReservationById/${selectedReservationId}`
        );
        const response = await axios.get<Reservation[]>(
          "http://localhost:8080/findAllReservations"
        );
        setReservations(response.data || []);
        setSelectedReservationId(null);
        alert(
          `Reservation with ID ${selectedReservationId} deleted successfully`
        );
      } catch (err) {
        console.error("Error deleting reservation", err);
      }
    }
  };

  return (
    <div style={mainDivStyle}>
      <h2>Reservations</h2>
      <TableContainer
        component={Paper}
        style={{ textAlign: "center", width: "65%" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Preț</TableCell>
              <TableCell>Film</TableCell>
              <TableCell>Sala</TableCell>
              <TableCell>Nume Utilizator</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation, rowIndex) => (
              <TableRow
                key={reservation.id}
                onClick={() => {
                  setSelectedReservationId(reservation.id);
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedReservationId === reservation.id
                      ? "#E592FA"
                      : "inherit",
                }}
              >
                <TableCell>{reservation.broadcast.date}</TableCell>
                <TableCell>{reservation.broadcast.price}</TableCell>
                <TableCell>{reservation.broadcast.movie.title}</TableCell>
                <TableCell>{reservation.broadcast.room.name}</TableCell>
                <TableCell>
                  {`${reservation.user.firstName} ${reservation.user.lastName}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={buttonContainerStyle}>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={handleDeleteReservation}
        >
          Sterge Rezervare
        </Button>
      </div>
    </div>
  );
};

export default ReservationList;
