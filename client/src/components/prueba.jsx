import React from 'react';
import { Button, Typography } from '@mui/material';
import { handleAdminAction } from '../store';

const AdminComponent = () => {
  const handleClick = async () => {
    try {
      await handleAdminAction({}); // Llamar a la función handleAdminAction
      // Realizar acciones adicionales después de que handleAdminAction se complete, si es necesario
      console.log("Acción de administrador completada exitosamente.");
    } catch (error) {
      console.error("Error al ejecutar la acción de administrador:", error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Panel de administrador
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Ejecutar acción de administrador
      </Button>
    </div>
  );
};

export default AdminComponent;