import React, { useState, useEffect } from "react";
import axios from "axios";

type Client = {
  id?: number; //este optional
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};
const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  useEffect(() => {
    // preluam datele despre clienti de la server
    const fetchClients = async () => {
      try {
        const response = await axios.get<Client[]>(
          "http://localhost:8080/displayAllUsers"
        );
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients", error);
      }
    };

    fetchClients();
  }, []);

  const handleClientSelect = (client: Client) => {
    // se actualizeaza starea pentru a afisa detaliile clientului selectat
    setSelectedClient(client);
  };

  return (
    <div>
      <h2 style={{ position: "sticky", padding: "30px" }}> Lista clientilor</h2>
      <ul>
        {" "}
        {clients.map((client) => (
          <li
            key={client.id}
            onClick={() => handleClientSelect(client)}
            style={{
              cursor: "pointer",
              padding: "8px",
              margin: "5px",
              borderRadius: "5px",
            }}
          >
            {client.firstName} {client.lastName}
          </li>
        ))}
      </ul>
      {selectedClient && (
        <div style={{ marginTop: "20px" }}>
          <h3>Detalii Client</h3>
          <p>ID: {selectedClient.id}</p>
          <p>Nume: {selectedClient.firstName}</p>
          <p>Prenume: {selectedClient.lastName}</p>
          <p>Email: {selectedClient.email}</p>
          <p>Password: {selectedClient.password}</p>
          <p>Phone number: {selectedClient.phoneNumber}</p>
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
  );
};

export default ClientList;
