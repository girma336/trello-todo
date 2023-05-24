import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ItemList from './itemList/ItemList';

const ListTodoItem = ({ val }) => {
  const datas = useSelector((state) => state.TodoLists.TodoLists);

  const data = datas.findIndex((data) => data.id === val);
  console.log('todos', data);
  return (
    <div className="">
      {datas && datas[data].todos.map((valu) => (
        <div key={valu.id}>
          <ItemList valu={valu} val={val} />
        </div>
      ))}
    </div>
  );
};

ListTodoItem.propTypes = {
  val: PropTypes.string.isRequired,
};
export default ListTodoItem;
