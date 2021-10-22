class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage(props) {
      this.setState({
        messages: this.state.messages.concat(this.state.input)
      })
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          
          { /* Render an input, button, and ul below this line */ }
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
          <button onClick={this.props.submitMessage}>Submit</button>
          <ul>{this.state.messages.map(i => <li>{i}</li>)}</ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };