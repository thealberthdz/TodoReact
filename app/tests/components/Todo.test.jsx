var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
	it('should exist todo', () => {
		expect(Todo).toExist();
	});

	it('Should call toggle prop with id on click', () => {
		var todoData = {
			id: 119,
			text: 'Toogle test',
			completed: true
		}
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(119);
	});


});