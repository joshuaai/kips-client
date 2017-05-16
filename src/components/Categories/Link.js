import React from 'react';
import { observer, inject } from 'mobx-react';

import rating from './ratings.png';

@inject(['categories']) @observer
class Link extends React.Component {
  removeLink = (e) => {
    e.preventDefault();
    this.props.categories.removeLink(this.props.id, this.props.categories.catId);
  }

  render() {
    return (
      <div className='col-md-3 box'>
        <div className='linkTop'></div>
        <div className='link'>
          <br />
          <h4><a href={this.props.link_url} target='_blank'>{this.props.title}</a></h4>
          <br />
          <img src={rating} alt="rating" />
			    <br />
          <br />
          <div className='linkIcon'>
            <a href='#' onClick={this.removeLink}><span className="glyphicon glyphicon-trash"></span></a>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default Link;