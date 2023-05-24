import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

const ListTodoTitle = ({ val }) => (
  <div>
    <div className="add__todo" key={val}>
      <h3>
        List :
        {val}
      </h3>
    </div>
    <TodoList val={val} />
  </div>
);
ListTodoTitle.propTypes = {
  val: PropTypes.string.isRequired,
};
export default ListTodoTitle;
