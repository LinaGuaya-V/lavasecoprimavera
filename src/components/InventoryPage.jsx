// InventoryPage.jsx
import React from "react";
import "./InventoryPage.css";
import { Link } from "react-router-dom";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TextField, Button, Modal, Box, MenuItem
} from '@mui/material';

const InventoryPage = () => {
  const data = [
    { code: "32089", date: "21/10/2024", text: "Maria Vanegas", quantity: 5, total: "$45,000", status: "En espera" },
    { code: "32089", date: "21/10/2024", text: "Miguel Arango", quantity: 7, total: "$45,000", status: "En espera" },
    { code: "32089", date: "20/10/2024", text: "Luisa Tinjaca", quantity: 5, total: "$45,000", status: "Entregado" },
    { code: "32089", date: "20/10/2024", text: "Diego Suarez", quantity: 7, total: "$45,000", status: "Entregado" },
    { code: "32089", date: "20/10/2024", text: "Lola Quintero", quantity: 5, total: "$45,000", status: "En espera" },
    { code: "32089", date: "20/10/2024", text: "Juliana Carrillo", quantity: 7, total: "$45,000", status: "Entregado" },
  ];

  return (
                
    <div className="inventory-page">
      <header>
        <Link to="/home">
        <Button variant="outlined" className="back-button">
                        <span>Atrás</span>
                    </Button>        </Link>
        <img src="https://i.imgur.com/esKP4yV.png" alt="Lavaseco Primavera Logo" className="logo"/>

        <Button variant="outlined" className="admin-button">
                        <span>Administrador</span>
                    </Button>      </header>
      <img src="https://i.imgur.com/DbRqShf.png" alt="Imagen adicional" className="extra-image" />

      <h1>Gestión De Inventario</h1>
      <div className="search-bar">
      <TextField label="Buscar Código Factura" variant="outlined" />
      <TextField label="Buscar Nombre Cliente" variant="outlined" />
      <TextField label="Buscar por Fecha" type="date" InputLabelProps={{ shrink: true }} />
      </div>
      <div>
      <Button variant="outlined" className="button-search">
                        <span>Buscar</span>
                    </Button>      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Código de factura</th>
            <th>Fecha</th>
            <th>Nombre Cliente</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "odd-row" : ""}>
              <td>{item.code}</td>
              <td>{item.date}</td>
              <td>{item.text}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
              <td className={item.status === "Entregado" ? "status-delivered" : "status-pending"}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>«</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>…</button>
        <button>10</button>
        <button>»</button>
      </div>
    </div>
  );
};

export default InventoryPage;
