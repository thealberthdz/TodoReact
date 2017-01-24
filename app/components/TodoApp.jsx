var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			search: '', 
			todos: [
				{
					id: uuid(),
					text: "Walk the dog", 
					completed: false
				},
				{
					id: uuid(),
					text: "do the dishes",
					completed: true
				},
				{
					id: uuid(),
					text: "Do my bed",
					completed: false
				},
				{
					id: uuid(),
					text: 'Fuck You!',
					completed: true
				}
			]
		};
	},
	handleAddTodo: function(text, completed){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: completed
				}
			]
		});
	},
	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updatedTodos});
	},
	handleSearch: function(showCompleted, search) {
		this.setState({
			showCompleted: showCompleted,
			search: search
		});
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;