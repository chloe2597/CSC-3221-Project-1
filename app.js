//const { fail } = require("assert");
const express = require("express");
const app = express();
let {people} = require("./data");

//static assests 
app.use(express.static("./methods-public"));
//parse the data
app.use(express.urlencoded({extended: false}));
//parse json
app.use(express.json());

//Build the routes 
app.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people});
});

app.post("/api/people", (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res
        .status(400)
        .json({success: false, msg: "Please provide name value "});
    };
    res.status(201).json({success: true, person: name});
});

app.put("/api/people/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res.status(404).json({success: false, msg: 'no person with id ${id}'})
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success: true, data: newPeople});
});

app.delete("/api/people:id", (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res.status(404).json({success: false, msg: 'No person with id ${req.params.id} found.'});
    };
    const newPeople = people.filter((person) => {person.id !==Number(req.params.id)});
    return res.status(200).json({success: true, data: new People});
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});