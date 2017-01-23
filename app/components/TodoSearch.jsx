var React = require('react');

var TodoSearch = React.createClass({
	handleSearch: function (){
		var showCompleted = this.refs.showCompleted.checked;
		var search = this.refs.searchText.value;

		this.props.onSearch(showCompleted, search);
	},
	render: function(){
		return(
			<div>
				<div>
					<input type="search" ref = "searchText" placeholder="Search todos" onChange={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref = "showCompleted" onChange={this.handleSearch} />
						Show completed todos.
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;