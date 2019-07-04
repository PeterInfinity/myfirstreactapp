import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { priorities } from './resources/task_priority.json';

class TaskForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

        console.log(priorities);
    }

    handleInput(e) {
        // escucha cualquier cambio de valor en los input de entrada o en los combo box de este componente
        // console.log(e.target.value + ":::" + e.target.name);

        // el objeto 'e.target' es la etiqueta html que esta escuchando este handle(evento)
        // la constante es declarada como {value, name} y se extraen los valores 'name' y 'value' del objeto 'e.target'
        // 'name' hace referencia al atributo 'name' de los input en el formulario del html
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }

    handleSubmit(e) {
        // previene el refresh de la pagina completa
        e.preventDefault();
        
        console.log("submit component taskform...");
        this.props.onAddTask(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: ''
        });
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Titulo..."
                            value={this.state.title}
                            onChange={this.handleInput}
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsable..."
                            value={this.state.responsible}
                            onChange={this.handleInput}
                        ></input>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Descripcion..."
                            value={this.state.description}
                            onChange={this.handleInput}
                        ></input>
                    </div>
                    <div className="form-group">
                        <FormControl className="form-control">
                            <InputLabel htmlFor="task-priority-select">Prioridad</InputLabel>
                            <Select
                                value={this.state.priority}
                                onChange={this.handleInput}
                                inputProps={{
                                    name: 'priority',
                                    id: 'task-priority-select',
                                }}
                            >
                                {priorities.map(priority => (
                                    <MenuItem key={priority.name} value={priority.value} >
                                        {priority.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="btn btn-primary bg-dark">
                            Guardar
                        </Button>
                    </div>
                </form >
            </div >
        );
    }
}
export default TaskForm;