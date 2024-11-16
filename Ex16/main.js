const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})

    let randomName = ["Rudra", "Sahil", "Pratik", "Ankit"]
    let randomlang = ["Js", "Python", "Java", "C++"]
    let randomCity = ["Bhubaneswar", "Cuttack", "Puri", "Balasore"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create(
            {
                name: getRandom(randomName),
                salary: Math.floor(Math.random() * 250000),
                language: getRandom(randomlang),
                city: getRandom(randomCity),
                isManager: (Math.random() > 0.5)
            }
        )
        console.log(e)
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})