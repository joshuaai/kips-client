import React from 'react';
import { findDOMNode } from 'react-dom';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';

import { Link } from 'react-router-dom';

@inject(['categories']) @observer
class Category extends React.Component {

  componentDidMount() {
    const el = findDOMNode(this.refs.colorBg);
    $(el).css('background-color', `${this.props.color}`);
    this.props.categories.setCatName(this.props.name);
  }

  removeCategory = (e) => {
    e.preventDefault();
    this.props.categories.remove(this.props.id);
  }

  render() {
    return (
      <div className='col-md-3 box'>
        <div ref='colorBg' className='category'>
          <div className='categoryIcon'>
            <a href='#' onClick={this.removeCategory}>
              <span className="glyphicon glyphicon-trash"></span>
            </a>
			    </div>
          <div className='categoryName'>
            <h3>
              <Link to={`/categories/${this.props.id}/links`}>
                {this.props.name}
              </Link>
            </h3>
          </div>
          <div className='categoryCount'>
            <h5><b>{this.props.lins_count}</b> Links</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Category;