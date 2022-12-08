module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("preke", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      pavadinimas: {
        type: Sequelize.STRING
      },
      aprasymas: {
        type: Sequelize.STRING
      },
      svoris_gramais: {
        type: Sequelize.INTEGER
      },
      skyrius_id: {
        type: Sequelize.INTEGER
      },
      parduotuve_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return product;
  };