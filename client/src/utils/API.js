import axios from "axios";

export default {
    // Gets all students
    getStudents: function () {
        return axios.get("/api/students");
    },
    // Gets the Student with the given id
    getStudent: function (id) {
        return axios.get("/api/students/" + id);
    },
    // Deletes the Student with the given id
    deleteStudent: function (id) {
        return axios.delete("/api/students/" + id);
    },
    // Saves a Student to the database
    saveStudent: function (studentData) {
        return axios.post("/api/students", studentData);
    }
};
