module.exports = (sequelize, Sequelize) => {
    const shop = sequelize.define("parduotuve", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      pavadinimas: {
        type: Sequelize.STRING
      },
      adresas: {
        type: Sequelize.STRING
      },
      parduotuves_vadovas: {
        type: Sequelize.STRING
      },
      darbuotoju_kiekis: {
        type: Sequelize.INTEGER
      },
      prekiu_kiekis: {
        type: Sequelize.INTEGER
      }
    });
  
    return shop;
  };