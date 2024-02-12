const express = require("express")

const app = express();

app.use(express.json());

let users = [
{id: 1, name: 'Axel'},
{id: 2, name: 'Soto'},
{id: 3, name: 'Kendy'}]

app.get("/users", (req, res) =>{
    res.send(users)
});

app.post("/users", (req, res) => {
    const { body }  = req
    users.push(body)
    res.send("Se agrego el usuario")
});

app.patch("/users/:id", (req, res) => {
    const { body }  = req
    const { name } = body
    const { id } = req.params;
    
    let user = users.find((game) => game.id == id)
    user.name = name
    res.send({message: "se elimino el usuario", user})
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id)
    res.send("Se elimino el usuario")
});

app.listen(3000)