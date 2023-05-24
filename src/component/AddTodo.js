import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './AddTodo.css';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { addTodoList, changeId } from '../Store';

const AddTodo = ({ bar }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => ({
    id: state.form.id,
  }));

  const [add, setAdd] = useState(false);
  const handleClick = () => {
    setAdd(!add);
  };
  const handleChange = (e) => {
    dispatch(changeId(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoList({ id }));
    setAdd(!add);
  };
  return (
    <div className={`${bar ? 'to__list' : 'to__list left__start'}`}>

      <div className="add__todo">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add Todo List" value={id} disabled={!add} onChange={(e) => handleChange(e)} />
          <MdAdd onClick={handleClick} />
        </form>
      </div>

      { add && (
        <div className="modal_add_todo">
          <form onSubmit={handleSubmit} className="modal-content">
            <BiArrowBack className="back__icon__todo" onClick={handleClick} />
            <input type="text" placeholder="Add Todo List" value={id} className="form__control" disabled={!add} onChange={(e) => handleChange(e)} />
            <br />
            <button type="submit" className="form__control contact__button">save</button>
          </form>
        </div>
      )}
    </div>
  );
};

AddTodo.propTypes = {
  bar: PropTypes.bool.isRequired,
};
export default AddTodo;
