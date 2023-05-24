import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import ListTodoItem from './ListTodoItem';
import { addTodoItem } from '../Store';
import './TodoList.css';

const TodoList = ({ val }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [add, setAdd] = useState(false);
  const handleToggel = () => {
    setAdd(!add);
  };

  const onSubmit = (data) => {
    dispatch(addTodoItem(data));
    reset();
    setAdd(!add);
  };

  return (
    <div>
      <div className="add__todo add__item">
        <MdAdd className="md__add" onClick={handleToggel} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input {...register('Id')} value={val} type="hidden" />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input {...register('title')} disabled={!add} required placeholder="Add Todo" />
          <br />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}

          <textarea {...register('description')} disabled={!add} required placeholder="Add Todo description" />
        </form>
      </div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ListTodoItem val={val} />

      {add && (
        <div className="modal_add_todo">
          <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
            <BiArrowBack className="back__icon__todo" onClick={handleToggel} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input {...register('Id')} value={val} type="hidden" />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input {...register('title')} required placeholder="Add Todo" className="form__control" />
            <br />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <textarea {...register('description')} required placeholder="Add Todo description" className="form__control textarea" />
            <br />
            <button type="submit" className="form__control contact__button">save</button>
          </form>
        </div>
      )}
    </div>
  );
};

TodoList.propTypes = {
  val: PropTypes.string.isRequired,
};
export default TodoList;
