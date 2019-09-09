import React, { Component } from 'react';

class Total extends Component {
    render(){
        const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
      return (total)
    }
    
}

export default Total; 



