import React, { Component } from 'react';
import slugify from 'slugify';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SelectableList extends Component {
    render() {
      const features = Object.keys(this.props.features).map(key => {
        const options = this.props.features[key].map((item, index) => {
            // const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
            //  const featureClass = 'feature__option' + 'selectedClass'; 
             return (
                <div key={index} className="feature__item">          
                    
                    <input
                        type="radio"
                        id={index}
                        className="feature__option"
                        name={slugify(key)}
                        checked={item.name === this.props.selected[key].name}
                        onChange={e => this.props.update(key, item)} 
                        />
                    <label htmlFor={index} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>)
        }) 
        return (
            <fieldset className="feature" key={key}>
              <legend className="feature__name">
                <h3>{key}</h3>
              </legend>
              {options}
            </fieldset>
      ) 
    })
    return features;
    }
} 
export default SelectableList;