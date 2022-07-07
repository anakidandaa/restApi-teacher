'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
         await queryInterface.createTable('teachers', { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
          },
          firstname: {
            type: Sequelize.STRING,
            allowNull:false
          },
          lastname: {
            type: Sequelize.STRING,
            allowNull:false
          },
          school: {
            type: Sequelize.TEXT,
          },
          createdAt:{
            type: Sequelize.DATE,
            allowNull:false
          },
           updatedAt:{
            type: Sequelize.DATE,
            allowNull:false
          }

        });

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('teachers');
  }
};
