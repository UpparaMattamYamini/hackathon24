const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Course Selection System Backend');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const courses = [
    {
        id: 1,
        name: 'Data Structures',
        teachers: [
            { id: 1, name: 'Dr. Prathap Naidu', rating: 4.3 },
            { id: 2, name: 'Dr. Madhusudhan Reddy', rating: 4.1 },
        ],
    },
    {
        id: 2,
        name: 'Physics',
        teachers: [
            { id: 2, name: 'Mr. Farook', rating: 3.8},
            { id: 2, name: 'Dr. Jamalaiah', rating: 4.5},
        ],
    },
    {
        id: 3,
        name: 'Chemistry',
        teachers: [
            
            { id: 3, name: 'Rajesh', rating: 3.5 },
            { id: 3, name: 'Arunbabu', rating: 3.0},
        ],
    },
    {
        id: 4,
        name: 'java',
        teachers: [
            
            { id: 4, name: 'Rishikeshava', rating: 4.5 },
            { id: 4, name: 'Sravan Kuamr reddy', rating: 4.0},
        ],
    },
    {
        id: 5,
        name: 'python',
        teachers: [
            
            { id: 5, name: 'madhusudhan', rating: 4.3 },
            { id: 5, name: 'Prathap naidu', rating: 4.6},
        ],
    },

];
app.get('/api/courses', (req, res) => {
    res.json(courses);
});
app.get('/api/teacher/:id', (req, res) => {
    const teacherId = parseInt(req.params.id);
    const teacher = courses
        .flatMap(course => course.teachers)
        .find(teacher => teacher.id === teacherId);
    
    if (!teacher) {
        return res.status(404).send('Teacher not founded');
    }
    
    res.json(teacher);
});
app.post('/api/feedback/:teacherId', (req, res) => {
    const teacherId = parseInt(req.params.teacherId);
    const { feedback } = req.body;

    // Save feedback in DB (you'll implement this with MySQL later)
    console.log(`Feedback for teacher ${teacherId}: ${feedback}`);
    
    res.status(200).send('Feedback submitted');
});
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // Change to your MySQL password
    database: 'course_selection'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
