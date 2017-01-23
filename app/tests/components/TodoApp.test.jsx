var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist TodoApp', () => {
		expect(TodoApp).toExist();
	});

	it('Should add todos to the todos state on handelTodos', () => {
		var todoTest = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoTest);

		expect(todoApp.state.todos[0].text).toBe(todoTest);
	});
});