import React from 'react';
import { observer } from 'mobx-react';

import './Category.css';

import { Link } from 'react-router-dom';

@observer(['categories'])
class Category extends React.Component {
  removeContact = (e) => {
    e.preventDefault();
    this.props.categories.remove(this.props.id);
  }

  render() {
    return (
      <div className='pure-u-1-3'>
        <h2>
          <Link to={`/category/${this.props.id}/links`}>
            {this.props.name}
          </Link>
        </h2>
        <p>{this.props.color}</p>
        <a href='#' className='pure-button removeButton' onClick={this.removeContact}>Remove</a>
      </div>
    )
  }
}

export default Category;