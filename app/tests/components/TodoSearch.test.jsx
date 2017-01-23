var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');


describe('TodoSearch', () => {
	it('Should exist TodoSearch', () => {
		expect(TodoSearch).toExist();
	});

	it('Should call onSearch with entered input text', () => {
		var searchText = 'dog'
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, 'dog');

	});

	it('Should call onSearch with proper checked value', () => {
		var checked = true;
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.showCompleted.checked = checked;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
})