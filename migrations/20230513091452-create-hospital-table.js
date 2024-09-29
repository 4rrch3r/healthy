'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('hospitalMigration',
    {
      name:{
        type:Sequelize.STRING(50),
        allowNull: false,
    },
    quantityEmployees:{
        type:Sequelize.INTEGER,
        validate: {
            isNumeric: true,
          },
    },
    address:{
        type:Sequelize.STRING(50),
        allowNull: false,
    },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
