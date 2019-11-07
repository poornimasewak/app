import React, { Component } from "react";
import API from "../utils/API";

class AddStudent extends Component {
    state = {
        name: "",
        course: "",
        phone: "",
        status: ""
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(name);
        this.setState(
            {
                [name]: value
            }
        )

    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let newStudent = {
            name: this.state.name,
            course: this.state.course,
            phone: this.state.phone,
            status: this.state.status
        }
        console.log(newStudent);
        API.saveStudent(newStudent)
            .then(data => alert("added"))
            .catch(err => console.log(err))



    }

    render() {
        return (
            <div>
                Add student
                <form>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="name" />
                    <input
                        name="course"
                        value={this.state.course}
                        onChange={this.handleInputChange}
                        placeholder="course" />
                    <input
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        placeholder="phone" />
                    <input
                        name="status"
                        value={this.state.status}
                        onChange={this.handleInputChange}
                        placeholder="status" />
                    <button
                        onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;