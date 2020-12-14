import React, { Component } from 'react';

class InputText extends Component {

    constructor(props){
        super(props);
        this.state = "";
    }

    render() {
        return (
            <div>
                <h1>Sign up to my newsletter</h1>
                <input type="text"/>
            </div>
        );
    }
  
  }

  export default InputText;