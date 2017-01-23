var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var newTodo = this.refs.seconds.value;

    if(newTodo.length > 0){
      this.refs.seconds.value = '';
      this.props.onAddTodo(newTodo);
    }else{
      this.refs.seconds.focus();
    }

  },
  render: function() {
    return (

      <div>
         <form ref="form" onSubmit = {this.onSubmit} className="todo-form">
          <input type="text" ref="seconds" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
     </div>
    );
  }
});

module.exports = AddTodo;