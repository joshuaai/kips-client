import React from 'react';
import { observer, inject } from 'mobx-react';

import Nav from '../Layout';
import Link from './Link'

import './index.css';

@inject(['categories']) @observer
class Show extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.categoryId;
    this.props.categories.setCatId(id);
    this.props.categories.fetchLinks(id);
  }

  addLink = (e) => {
    e.preventDefault();

    this.props.categories.addLink({
      title: this.refs.title.value,
      link_url: this.refs.url.value, 
    }, this.props.categories.catId);

    this.refs.title.value = null;
    this.refs.url.value = null;
  };

  newLink = () =>
    <div className='categoryForm'>
      <div className='hfour'>
        <h3 id='cat'>{this.props.categories.catName}</h3>
      </div>
      <form className='pure-form' onSubmit={this.addLink}>
        <fieldset>
          <input ref='title' type='text' placeholder='Link Title' />
          <input ref='url' type='text' placeholder='Url' />
          <button type="submit" className="pure-button pure-button-primary addButton">Add Link</button>
        </fieldset>
      </form>
    </div>;

  render() {
    const { allLinks } = this.props.categories;

    return (
      <div id='Show' className='collection'>
        <Nav.Application /> 
        {this.newLink()}
        <div className='collections'>
          <h4><b>{allLinks.slice().map(c => c.id).length}</b> Links</h4>
          <div className='pure-g'>
            {allLinks.slice().map(info =>
              <Link key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Show;