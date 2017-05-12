import React from 'react';
import { observer, inject } from 'mobx-react';

import './Category.css';

@inject(['categories']) @observer
class Link extends React.Component {
  removeLink = (e) => {
    e.preventDefault();
    this.props.categories.removeLink(this.props.id, this.props.categories.catId);
  }

  render() {
    return (
      <div className='pure-u-1-3'>
        <h2>
            {this.props.title}
        </h2>
        <p>{this.props.link_url}</p>
        <a href='#' className='pure-button removeButton' onClick={this.removeLink}>Remove</a>
      </div>
    )
  }
}

export default Link;