import React, { component } from 'react';

class Summary extends Component {
    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];

         
    })
}
}
export default Summary; 

//currency used