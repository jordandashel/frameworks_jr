var NameBox = React.createClass({displayName: "NameBox",
  handleChange: function(){
    this.props.onUserInput(
        this.refs.name.getDOMNode().value
    );
  },

  render: function() {
    return (
      React.createElement("form", null, 
        React.createElement("input", {type: "text", value: this.props.name, ref: "name", onChange: this.handleChange})
      )
    );
  }
});

var NameEval = React.createClass({displayName: "NameEval",
  getInitialState: function(){
    return {
      name: ''
    };
  },

  handleUserInput: function(name){
    this.setState({
      name: name
    });
  },

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, getMessage(this.state.name)), 
        React.createElement(NameBox, {
          text: this.state.name, 
          onUserInput: this.handleUserInput}
        )
      )
    )
  }
});

getMessage = function(name){
  var message = "";
  if((name == "Bryan Holdt") || 
      (name == "Jordan Dashel")){
    message = name + " is awesome!"
  } else {
    message = name + " is not awesome"
  }
  return message;
}

var Container = React.createClass({displayName: "Container",
  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, "Awesome?"), 
        React.createElement(NameEval, null)
      )
    );
  }
})

React.render(
    React.createElement(Container, null),
   document.getElementById('names')
);
