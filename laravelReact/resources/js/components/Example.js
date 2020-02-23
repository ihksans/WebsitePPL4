import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table, Button , Modal , ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label} from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {

    constructor()
    {
        super()
        this.state = {
            tasks_ks: [],
            newTaskModal:false,
            newTaskData:{
                name:"",
                description:""
            }
        }
    }
    loadTask()
    {
        axios.get('http://localhost:8000/tasks').then((response) =>{
            this.setState({
                tasks_ks:response.data
            })
        })
    }

    addTask(){
            
            axios.post('http://localhost:8000/task',  this.state.newTaskData).then((response) => {
              
            let { tasks_ks } = this.state 
            this.loadTask()
            this.setState({
                tasks_ks,
                newTaskModal:false,
                newTaskData:{
                    name:"",
                    description:"" 

                }

            })
        })
    }


    toogleNewTaskModal(){
        this.setState({
            newTaskModal:true
        })
    }
    componentWillMount(){
        this.loadTask();
    }

    

    render() {
        let tasks_ks = this.state.tasks_ks.map((task) =>{
            return (
                <tr key = {task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                    <td>
                      <Button color="success" size="sm" className= "mr-2">Edit</Button>
                      <Button color="danger" size="sm" className= "mr-2">Delete</Button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container">   
                    <Button color="primary" onClick={this.toogleNewTaskModal.bind(this)}>Add Task</Button>
                    <Modal isOpen={this.state.newTaskModal} toggle={this.toogleNewTaskModal.bind(this)}>
                    <ModalHeader toggle={this.toogleNewTaskModal.bind(this)}>Modal title</ModalHeader>
                    <ModalBody>
                       <FormGroup method = "POST">
                           <Label for="name"> Name</Label>
                         
                            <Input
                            id="name" 
                            value={this.state.newTaskData.name}
                            onChange={(e) => {
                            let {newTaskData} = this.state
                            newTaskData.name = e.target.value
                            this.setState({newTaskData})
                            }}></Input>
                       </FormGroup>
                       <FormGroup method = "POST">
                     
                           <Label for="description">Description</Label>
                           
                           <Input
                            id="description" 
                            value={this.state.newTaskData.description}
                            onChange={(f) => {
                            let {newTaskData} = this.state
                            newTaskData.description = f.target.value
                            this.setState({newTaskData})
                            }}></Input>
                       </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.addTask.bind(this)}>Add Task</Button>{' '}
                    <Button color="secondary" onClick={this.toogleNewTaskModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {tasks_ks}
                    </tbody>
                </Table>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
