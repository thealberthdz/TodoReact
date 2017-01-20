var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should exist TodoList', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo for each todo item', () => {
		var todos = [{
			id: 1,
			text: 'Do something'
		},
		{
			id: 2,
			text: 'Do something strong'
		},
		{
			id: 3,
			text: "go for it madafucka"
		}];

		var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var todoscomponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

		expect(todoscomponents.length).toBe(todos.length);
	});
});
