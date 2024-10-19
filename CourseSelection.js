import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseSelection() {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState({});

    useEffect(() => {
        axios.get('/api/courses').then(res => setCourses(res.data));
    }, []);

    const handleSelection = (courseId, teacherId) => {
        setSelectedCourses({ ...selectedCourses, [courseId]: teacherId });
    };

    const submitSelections = () => {
        axios.post('/api/submit-selections', { selectedCourses })
            .then(() => alert('Courses submitted!'));
    };

    return (
        <div>
            <h2>Select Courses</h2>
            {courses.map(course => (
                <div key={course.id}>
                <h3>{course.name}</h3>
                {course.teachers.map(teacher => (
                    <div key={teacher.id}>
                        <input
                            type="radio"
                            name={course.id}
                            onChange={() => handleSelection(course.id, teacher.id)}
                        />
                        {teacher.name} (Rating: {teacher.rating})
                    </div>
                ))}
            </div>
        ))}
        <button onClick={submitSelections}>Submit</button>
    </div>
);
}
export default CourseSelection;


