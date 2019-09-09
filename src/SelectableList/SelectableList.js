import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
class SelectableList extends Component {


    render() {
     /* const features = Object.keys(this.props.features).map(key => {
       
        const options = this.props.features[key].map((item, index) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(key)}
                checked={item.name === this.props.selected[key].name}
                onChange={e => this.props.updateFeature(key, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
      }) */
    
      return (
        <fieldset className="feature" key={key}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
    }
    }
    

export default SelectableList;