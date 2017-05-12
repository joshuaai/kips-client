import React from 'react';
import { observer, inject } from 'mobx-react';

import Nav from '../Layout';
import Category from './Category';

import './index.css';

@inject('categories') @observer
class Collection extends React.Component {
  componentWillMount() {
    this.props.categories.fetchAll();
  }

  addCategory = (e) => {
    e.preventDefault();

    this.props.categories.add({
      name: this.refs.name.value,
      color: this.refs.color.value, 
    });

    this.refs.name.value = null;
    this.refs.color.value = null;
  };

  newCategory = () =>
    <div className='categoryForm'>
      <form className='pure-form' onSubmit={this.addCategory}>
        <fieldset>
          <h4>New Category</h4>
          <input ref='name' type='text' placeholder='Category Name' />
          <input ref='color' type='text' placeholder='Preferred Color' />

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
          <h4>My Categories</h4>
          <h4><b>{all.slice().map(c => c.lins_count).reduce((acc, curr, idx, arr) => acc + curr, 0)} </b> 
              Links in <b>{all.slice().map(c => c.id).length}</b> Categories
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