import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { id, name, onChange } = this.props;
    return (
      <div key={ id }>
        <label htmlFor={ name }>
          <input
            data-testid="category"
            type="radio"
            name="categories"
            onChange={onChange}
          />
          { name }
        </label>
      </div>
    );
  }
}

CategoryList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CategoryList;
