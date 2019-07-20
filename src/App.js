import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    inputText: ''
  };

  inputChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
  };

  deleteCharHadler = (index) => {
    const charList = this.state.inputText.split('')
    charList.splice(index, 1);
    const updateTextInput = charList.join('');

    this.setState({inputText: updateTextInput});
  }

  render() {
    const charList = this.state.inputText.split('').map((ch, index) => {
      return <CharComponent char={ch} key={index} click={() => this.deleteCharHadler(index)}/>
    });

    return(
      <div className="App">
        <h1>Exercise 2</h1>
        <input 
          type="text" 
          onChange={ this.inputChangeHandler } 
          value={this.state.inputText}
          />
        <p>{this.state.inputText}</p>
        <ValidationComponent inputLength={this.state.inputText.length}/>
        { charList }
      </div>
    );
  }
    
}

export default App;
