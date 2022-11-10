const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID, // Genera id random con letras y numeros
      allowNull: false,
      primaryKey: true, // Columna que identifica de forma exclusiva la fila de la tabla
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    released:{ 
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
    rating:{
      type: DataTypes.INTEGER
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
