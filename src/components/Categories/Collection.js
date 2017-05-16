import React from 'react';
import { observer, inject } from 'mobx-react';

import Nav from '../Layout';
import Category from './Category';

import './index.css';

@inject('categories') @observer
class Collection extends React.Component {
  state = { background: '#3599db', }
  
  componentWillMount() {
    this.props.categories.fetchAll();
  }

  addCategory = (e) => {
    e.preventDefault();

    this.props.categories.add({
      name: this.refs.name.value,
      color: this.state.background, 
    });

    this.refs.name.value = null;
    this.refs.color.value = null;
  };

  handleColorChange = (e) => {
    this.setState({ background: e.target.value });
  }

  newCategory = () =>
    <div className='categoryForm'>
      <div className='hfour'>
        <h4 id='cat'>New Category</h4>
      </div>
      <form className='pure-form' onSubmit={this.addCategory}>
        <fieldset>
          <input ref='name' type='text' placeholder='Category Name' />
          <span>Your Color: &nbsp;
            <input ref='inputColor' type='color' value={this.state.background} onChange={this.handleColorChange} />
          </span>
          <button type="submit" className="pure-button pure-button-primary addButton">Add Category</button>
        </fieldset>
      </form>
    </div>;

  render() {
    const { all } = this.props.categories;
    return (
      <div id='Collection' className='collection'>
        <Nav.Application />
        {this.newCategory()}
        <div className='collections'>
          <div className='hfour'> 
            <h4 id='cat'>My Categories</h4>
          </div>
          <h4 id='count'><b>{all.slice().map(c => c.lins_count).reduce((acc, curr, idx, arr) => acc + curr, 0)} </b> 
              links in <b>{all.slice().map(c => c.id).length}</b> categories
          </h4>
          <div className='pure-g'>
            {all.slice().map(info =>
              <Category key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;