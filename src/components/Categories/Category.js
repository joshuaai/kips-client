import React from 'react';
import { findDOMNode } from 'react-dom';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';

import './Category.css';

import { Link } from 'react-router-dom';

@inject(['categories']) @observer
class Category extends React.Component {
  componentDidMount() {
    const el = findDOMNode(this.refs.me);
    $(el).css('background-color', `${this.props.color}`);
  }

  removeContact = (e) => {
    e.preventDefault();
    this.props.categories.remove(this.props.id);
  }

  render() {
    return (
      <div ref='me' className='pure-u-1-3'>
        <h2>
          <Link to={`/categories/${this.props.id}/links`}>
            {this.props.name}
          </Link>
        </h2>
        <p>{this.props.color}</p>
        <p>{this.props.lins_count} Links</p>
        <a href='#' className='pure-button removeButton' onClick={this.removeContact}>Remove</a>
      </div>
    )
  }
}

export default Category;