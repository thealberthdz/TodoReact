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
					text: "Walk the dog"
				},
				{
					id: uuid(),
					text: "do the dishes"
				},
				{
					id: uuid(),
					text: "Do my bed"
				},
				{
					id: uuid(),
					text: 'Fuck You!'
				}
			]
		};
	},
	handleAddTodo: function(text){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			]
		});
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