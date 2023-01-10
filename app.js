require("dotenv").config()
const express = require("express")
const { Sequelize } = require("sequelize")
const app = express()
app.use(express.json())

const sequelize = new Sequelize(process.env.SCALINGO_POSTGRESQL_URL)

app.get("/", function (req, res) {
  res.send(`Hello World!`)
})

app.get("/todos", async function (req, res) {
  let todos = []
  try {
    todos = (await sequelize.query("SELECT * FROM todos"))[0]
  } catch (error) {
    console.error(error)
  }
  res.send(todos)
})

app.post("/todos", async function (req, res) {
  console.log(`Données entrées : ${JSON.stringify(req.body)}`)

  try {
    await sequelize.query(
      `INSERT INTO todos(description, date_echeance) VALUES(?, ?) RETURNING id`,
      {
        replacements: [req.body.description, req.body.date_echeance]
      }
    )
  } catch (error) {
    console.error(error)
    res.status(400).send("bad request")
    return
  }
  res.send("Ok")
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
