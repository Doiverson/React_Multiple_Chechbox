import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './CheckBox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        {id: 1, value: "banana", isChecked: false},
        {id: 2, value: "apple", isChecked: false},
        {id: 3, value: "mango", isChecked: false},
        {id: 4, value: "grape", isChecked: false},
        {id: 5, value: "melon", isChecked: false},
        {id: 6, value: "orange", isChecked: false},
        {id: 7, value: "strawberry", isChecked: false},
        {id: 8, value: "okonomiyaki", isChecked: false},
      ]
    }
  }

  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => fruite.isChecked = event.target.checked)
    this.setState({fruites: fruites})
  }

  handleCheckChildElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
      if (fruite.value === event.target.value)
        fruite.isChecked =  event.target.checked
    })
    this.setState({fruites: fruites})
  }

  render() {
    return (
        <div className="App">
          <h1> Check and Uncheck All Example </h1>
          <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
          <ul>
            {
              this.state.fruites.map((fruite) => {
                return (<CheckBox key={fruite.id} handleCheckChildElement={this.handleCheckChildElement}  {...fruite} />)
              })
            }
          </ul>
        </div>
    );
  }
}

export default App
