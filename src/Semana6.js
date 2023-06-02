import React, { useState } from 'react';

const ContenedorConComentario = () => {
  const [mostrarComentario, setMostrarComentario] = useState(false);

  const handleMouseEnter = () => {
    setMostrarComentario(true);
  };

  const handleMouseLeave = () => {
    setMostrarComentario(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Contenedor

      {mostrarComentario && (
        <div>
          Cuadro de texto adicional
        </div>
      )}
    </div>
  );
};

export default ContenedorConComentario;