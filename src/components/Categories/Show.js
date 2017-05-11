import React from 'react';
import { observer } from 'mobx-react';

import Nav from '../Layout';
import Link from './Link'

@observer(['categories'])
class Show extends React.Component {
  componentWillMount() {
    const category = this.props.categories.find(this.props.match.params.categoryId);
    this.setState({ category });
  }

  addLink = (e) => {
    e.preventDefault();

    this.props.categories.addLink({
      title: this.refs.title.value,
      link_url: this.refs.url.value, 
    }, this.props.match.params.categoryId);

    this.refs.title.value = null;
    this.refs.url.value = null;
  };

  newLink = () =>
    <div className='categoryForm'>
      <form className='pure-form' onSubmit={this.addLink}>
        <fieldset>
          <h4>New Link</h4>
          <input ref='title' type='text' placeholder='Category Name' />
          <input ref='url' type='text' placeholder='Preferred Color' />

          <button type="submit" className="pure-button pure-button-primary">Add Link</button>
        </fieldset>
      </form>
    </div>;

  render() {
    const { all } = this.state.category.lins

    return (
      <div id='Show' className='collection'>
        <Nav.Application />
        {this.newLink()}
        <div className='collections'>
          <h4>My Links</h4>
          <div className='pure-g'>
            {all.slice().map(info =>
              <Link key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Show;