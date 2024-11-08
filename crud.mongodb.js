use("CRUDdb")
db.createCollection("Courses")

// db.Courses.insertOne({
//     name: "Web Dev Free Course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.Courses.insertMany([
//     {
//         "name": "Intro to Python",
//         "price": 0,
//         "assignments": 10,
//         "projects": 30
//     },
//     {
//         "name": "Java Basics",
//         "price": 0,
//         "assignments": 15,
//         "projects": 40
//     },
//     {
//         "name": "Frontend Fundamentals",
//         "price": 0,
//         "assignments": 8,
//         "projects": 20
//     },
//     {
//         "name": "React for Beginners",
//         "price": 0,
//         "assignments": 9,
//         "projects": 25
//     },
//     {
//         "name": "SQL Essentials",
//         "price": 0,
//         "assignments": 7,
//         "projects": 15
//     },
//     {
//         "name": "Machine Learning Basics",
//         "price": 0,
//         "assignments": 20,
//         "projects": 50
//     },
//     {
//         "name": "Data Science Free Course",
//         "price": 0,
//         "assignments": 18,
//         "projects": 35
//     },
//     {
//         "name": "HTML & CSS Bootcamp",
//         "price": 0,
//         "assignments": 5,
//         "projects": 10
//     },
//     {
//         "name": "JavaScript Essentials",
//         "price": 0,
//         "assignments": 12,
//         "projects": 28
//     },
//     {
//         "name": "Full Stack Development",
//         "price": 0,
//         "assignments": 25,
//         "projects": 60
//     }
// ]
// )

// // let a = db.Courses.find({ assignments: 15 })

// // console.log(a.count())
// // console.log(a.toArray())

// let b = db.Courses.findOne({ projects: 60 })

// console.log(b)

// UPDATE

// db.Courses.updateOne({ price: 0 }, { $set: { price: 100 } })


// db.Courses.updateMany({ price: 0 }, { $set: { price: 1000 } })


//DELETE

// db.Courses.deleteOne({ price: 100 })
// db.Courses.deleteMany({ price: 1000 })

db.Courses.find({ projects: { $gte: 55 } })