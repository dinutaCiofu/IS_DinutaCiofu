import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import customerIcon from "../../Img/customer.png";
import customers from "../../Img/customers.png";
import Button from "@mui/material/Button";
import {
  buttonStyle,
  clientDetailsDivStyle,
  clientListDivStyle,
  liStyle,
  parentDivStyle,
  ulStyle,
} from "./ClientList.styles";

type Client = {
  id?: number; //este optional
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isCustomer: boolean;
};
const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [updatedClient, setUpdatedClient] = useState<Client | null>(null);

  useEffect(() => {
    // preluam datele despre clienti de la server
    const fetchClients = async () => {
      try {
        const response = await axios.get<Client[]>(
          "http://localhost:8080/displayAllUsers"
        );
        setClients(response.data || []);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching clients", error);
      }
    };

    fetchClients();
  }, []);

  const handleClientSelect = (client: Client) => {
    // se actualizeaza starea pentru a afisa detaliile clientului selectat
    setSelectedClient(client);
    setUpdatedClient({ ...client });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Client
  ) => {
    if (updatedClient) {
      setUpdatedClient({ ...updatedClient, [field]: e.target.value });
    }
  };

  const handleUpdateClient = async () => {
    try {
      if (selectedClient && updatedClient) {
        // trimite un request pentru update client
        const response = await axios.put(
          `http://localhost:8080/updateUser/${selectedClient.id}`,
          updatedClient
        );

        // handle the response
        console.log("Update response:", response.data);

        // se reincarca lista de clienti dupa update
        const clientsResponse = await axios.get<Client[]>(
          "http://localhost:8080/displayAllUsers"
        );
        setClients(clientsResponse.data);
      }
    } catch (error) {
      console.error("Error updating client, ", error);
    }
  };

  const handleDeleteClient = async () => {
    try {
      if (selectedClient) {
        // se trimite request pentru stergerea clientului dupa adresa de email
        console.log("Deleting client:", selectedClient.email);
        await axios.delete(
          `http://localhost:8080/deleteUser?email=${selectedClient.email}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // reincarca lista de clienti dupa stergere
        const response = await axios.get<Client[]>(
          "http://localhost:8080/displayAllUsers"
        );
        setClients(response.data);

        //deselecteaza clientul dupa stergere
        setSelectedClient(null);
      }
    } catch (error) {
      console.error("Error deleting client", error);
    }
  };
  return (
    <div style={parentDivStyle}>
      <div style={clientListDivStyle}>
        <h2> Lista clientilor</h2>
        <ul style={ulStyle}>
          {clients.map((client) =>
            client.isCustomer ? (
              <li
                key={client.id}
                onClick={() => handleClientSelect(client)}
                style={liStyle}
              >
                <img
                  src={customerIcon}
                  alt="Customer Icon"
                  style={{ marginRight: "8px" }}
                />
                {client.firstName} {client.lastName}
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div style={clientDetailsDivStyle}>
        {selectedClient && (
          <div>
            <h2>Detalii Client</h2>
            <p>ID: {selectedClient.id}</p>
            <p>Nume:</p>
            <TextField
              value={updatedClient?.firstName || ""}
              onChange={(e) => handleInputChange(e, "firstName")}
              size="small"
            />

            <p>Prenume:</p>
            <TextField
              value={updatedClient?.lastName || ""}
              onChange={(e) => handleInputChange(e, "lastName")}
              size="small"
            />

            <p>Email:</p>
            <TextField
              value={updatedClient?.email || ""}
              onChange={(e) => handleInputChange(e, "email")}
              size="small"
            />

            <p>Password: </p>
            <TextField
              value={updatedClient?.password || ""}
              onChange={(e) => handleInputChange(e, "password")}
              size="small"
            />

            <p>Phone number:</p>
            <TextField
              value={updatedClient?.phoneNumber || ""}
              onChange={(e) => handleInputChange(e, "phoneNumber")}
              size="small"
            />

            <Button
              style={buttonStyle}
              variant="contained"
              onClick={handleUpdateClient}
            >
              Actualizare Client
            </Button>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={handleDeleteClient}
            >
              Ștergere Client
            </Button>
          </div>
        )}
      </div>
      <img
        src={customers}
        alt="Customers"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />
    </div>
  );
};

export default ClientList;
