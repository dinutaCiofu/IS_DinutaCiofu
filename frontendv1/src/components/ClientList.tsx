import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import customerIcon from "../Img/customer.png";

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
        setClients(response.data);
        console.log(response.data);
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

  const handleUpdateClient = () => {
    if (updatedClient) {
      console.log("Actualizare client:", updatedClient);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "300px",
          padding: "10px",
        }}
      >
        <h2> Lista clientilor</h2>
        <ul style={{ padding: 5, listStyle: "none" }}>
          {clients.map((client) =>
            client.isCustomer ? (
              <li
                key={client.id}
                onClick={() => handleClientSelect(client)}
                style={{
                  cursor: "pointer",
                  padding: "8px",
                  margin: "5px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
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
      <div
        style={{
          marginLeft: "20px",
          padding: "10px",
        }}
      >
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

            <button
              onClick={() =>
                console.log("Implementați funcționalitatea de actualizare")
              }
            >
              Actualizare Client
            </button>
            <button
              onClick={() =>
                console.log("Implementați funcționalitatea de ștergere")
              }
            >
              Ștergere Client
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;
