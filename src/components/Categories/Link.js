import React from 'react';
import { observer } from 'mobx-react';

import './Category.css';

@observer(['categories'])
class Link extends React.Component {

  componentWillMount() {
    const category = this.props.categories.find(this.props.match.params.categoryId);
    this.setState({ category });
  }

  render() {
    return (
      <div className='pure-u-1-3'>
        <h2>
            {this.state.category.lins.title}
        </h2>
        <p>{this.state.category.lins.link_url}</p>
        <a href='#' className='pure-button removeButton' onClick={this.removeContact}>Remove</a>
      </div>
    )
  }
}

export default Link;