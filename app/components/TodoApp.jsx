var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			search: '', 
			todos: [
				{
					id: 1,
					text: "Walk the dog"
				},
				{
					id: 2,
					text: "do the dishes"
				},
				{
					id: 3,
					text: "Do my bed"
				},
				{
					id: 4,
					text: 'Fuck You!'
				}
			]
		};
	},
	handleAddTodo: function(text){
		alert('new todo: ' + text);
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
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;