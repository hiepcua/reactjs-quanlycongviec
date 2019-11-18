import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
			isDisplayFrom : false,
			taskEditting: null,
			filter: {
				name: '',
				status: -1
			}
		}
	}

	componentWillMount(){
		if(localStorage && localStorage.getItem('tasks')){
			var tasks = JSON.parse(localStorage.getItem('tasks'));

			this.setState({
				tasks : tasks
			})
		}
	}

	s4(){
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateID(){
		return this.s4() + this.s4() + '-' + this.s4()  + '-' + this.s4()  + '-' + this.s4()  + '-' + this.s4()  
		+ '-' + this.s4()  + '-' + this.s4();
	}

	onToogleForm = () => { // Thêm task
		if(this.state.isDisplayFrom && this.state.taskEditting !== null){
			this.setState({
				isDisplayFrom : true,
				taskEditting: null
			})
		}else{
			this.setState({
				isDisplayFrom : !this.state.isDisplayFrom,
				taskEditting: null
			})
		}
	}

	onCloseForm = () =>{
		this.setState({
			isDisplayFrom : false
		})
	}

	onShowForm = () => {
		this.setState({
			isDisplayFrom : true
		})
	}

	onSubmit = (data)=>{
		var { tasks } = this.state;
		if(data.id === ''){
			data.id = this.generateID();
			tasks.push(data);
		}else{
			// Editting
			var index = this.findIndex(data.id);
			tasks[index] = data;
		}
		
		this.setState({
			tasks: tasks,
			taskEditting: null
		});

		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	onUpdateStatus = (id)=>{
		var index = this.findIndex(id);
		var { tasks } = this.state;
		if(index !== -1){
			tasks[index].status = !tasks[index].status;
			this.setState({
				tasks: tasks
			});

			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}

	onDelete = (id) => {
		var index = this.findIndex(id);
		var { tasks } = this.state;
		if(index !== -1){
			tasks.splice(index, 1);
			this.setState({
				tasks: tasks
			});

			localStorage.setItem('tasks', JSON.stringify(tasks));
		}

		this.onCloseForm();
	}

	onUpdate = (id) => {
		var { tasks } = this.state;
		var index = this.findIndex(id);
		var taskEditting = tasks[index];

		this.setState({
			taskEditting: taskEditting
		});

		this.onShowForm();
	}

	findIndex = (id) => {
		var { tasks } = this.state;
		var result = -1;
		tasks.forEach((task, index) => {
			if(task.id == id){
				result = index;
			}
		});
		return result;
	}

	onFilter = (filterName, filterStatus) => {
		filterStatus = parseInt(filterStatus, 10);
		this.setState({
			filter: {
				name: filterName,
				status: filterStatus
			}
		})
	}

	render(){
		var { tasks, isDisplayFrom, taskEditting, filter } = this.state; // var tasks = this.state.tasks
		console.log(filter);
		var elmTaskForm = isDisplayFrom ? 
				<TaskForm 
					onCloseForm={ this.onCloseForm } 
					onSubmit={ this.onSubmit }
					task={ taskEditting }
				/> : '';

		return (
			<div className="wrapper">
				<div className="container">
			        <div className="text-center">
			            <h1>Quản Lý Công Việc</h1>
			            <hr/>
			        </div>
			        <div className="row">
			            <div className={ isDisplayFrom ? 'col-xs-4 col-sm-4' : '' }>
			            	{/* Form */}
			                { elmTaskForm }
			            </div>
			            <div className={isDisplayFrom ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
			                <button 
				                type="button" 
				                className="btn btn-primary"
				                onClick={ this.onToogleForm }
			                >
			                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
			                </button>
			                {/* Search - Sort */}
			                <Control />
			            	{/* List */}
			                <TaskList 
			                	tasks={ this.state.tasks } 
			                	onUpdateStatus={ this.onUpdateStatus }
			                	onDelete={ this.onDelete }
			                	onUpdate={ this.onUpdate }
			                	onFilter={ this.onFilter }
			                />
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

export default App;
