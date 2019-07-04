import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/Navigation';
import TaskForm from './components/task/TaskForm';

import { tasks } from './model/task.json';
import { priorities } from './components/task/resources/task_priority.json';


class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks
    }
    // le indica al componente que la funcion 'handleAddTask' responde a eventos de este componente(App)
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    console.log(task);
    this.setState({
      tasks: [...this.state.tasks, task]
    });
    console.log("imprimiendo estado del componente...");
    console.log(this.state.tasks);
  }

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-md-6">
          <div className="card mt-2 md-2">
            <div className="card-header text-dark text-center">
              <h6>{task.title}</h6>
            </div>
            <div className="card-body text-dark">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Prioridad</td>
                    <TaskPriorityColumn priority={task.priority} />
                  </tr>
                  <tr>
                    <td>Responsable</td>
                    <td>{task.responsible}</td>
                  </tr>
                  <tr>
                    <td>Descripcion</td>
                    <td>{task.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    })
    // la propiedad 'onAddTask' se le bindea el metodo 'handleAddTask'
    // 
    return (
      <div className="App">

        <Navigation title="Tareas" />

        <div className="container">
          <div className="row mt-4 mb-4">

            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAddTask={this.handleAddTask} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {tasks}
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

class TaskPriorityColumn extends Component {

  render() {
    function getPriority(priority) {
      if (priority === "1") {
        return (
          <span className="badge badge-danger">
            Alta
          </span>
        );
      } else if (priority === "2") {
        return (
          <span className="badge badge-warning" >
            Media
          </span>
        );
      } else if (priority === "3") {
        return (
          <span className="badge badge-info">
            Baja
          </span>
        );
      } else {
        return (
          <span style={{ color: 'black' }}>
            P/N
          </span>
        );
      }
    }

    const name = getPriority(this.props.priority);

    return (
      <td>{name}</td>
    );
  }
}

export default App;
