import React, { Component } from 'react';

import Options from './options';

class SelectableList extends Component {

  render() {
    console.log(this.props)

  return (
    <>
      {Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Options 
            features = {this.props.features}
            feature = {feature}
            featureHash = {featureHash}
            selected = {this.props.selected}
            update = {this.props.update}
            />
          </fieldset>
        ) 
        })
    }
      </>

    ) 
  }
} 
export default SelectableList;