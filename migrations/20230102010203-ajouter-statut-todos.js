"use strict"

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("todos", "statut", {
            type: Sequelize.STRING,
            defaultValue: "EN_COURS",
            allowNull: false
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("todos", "statut")
    }
}