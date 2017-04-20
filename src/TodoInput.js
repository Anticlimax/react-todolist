import React, { Component } from 'react'

export default class TodoInput extends Component {
  render(){
    return <input type="text" value={this.props.content}
                              onKeyPress={this.submit}
                              onChange={this.changeTitle}/>
  }
  submit=(e)=>{

    if(e.key === 'Enter'){
      this.props.onSubmit(e)
    }
  }
  changeTitle=(e)=>{
    this.props.onChange(e)
  }
}