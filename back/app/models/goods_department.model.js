module.exports = (sequelize, Sequelize) => {
    const goods_department = sequelize.define("skyrius", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      pavadinimas: {
        type: Sequelize.STRING
      },
      prekiu_tipas: {
        type: Sequelize.STRING
      },
      prekiu_kiekis: {
        type: Sequelize.INTEGER
      },
      parduotuve_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return goods_department;
  };
  