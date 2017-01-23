var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
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
	handleAddTodo: function(text) {

		
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;