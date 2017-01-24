var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');
var TodoSearch = require('TodoSearch');

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

	it('Should call onSearch with proper checked value', () => {
		var checked = true;
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.showCompleted.checked = checked;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
	});

	it('Should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false
		}

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);



	});
});
