import React, { useState } from 'react';
import './ItemList.css';
import { MdEdit } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { editTodoItem, toggleTodoItem } from '../../Store';

const ItemList = ({ valu, val }) => {
  const [title, setTitle] = useState(valu.title);
  const [description, setDescription] = useState(valu.description);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  const data = {
    Id: val,
    listId: valu.id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      Id: val,
      id: valu.id,
      title,
      description,
      isDone: valu.isDone,
    };
    dispatch(editTodoItem((updatedTodo)));
  };

  const handleToogle = () => {
    dispatch(toggleTodoItem(data));
    console.log(valu.id);
  };
  return (
    <div>
      <div className="add__todo add__todos">
        {valu.isDone && (<div className="completed__task" />)}
        <MdEdit className="edit__icone" onClick={handleClick} />
        <div onClick={handleToogle} role="button" tabIndex={0} onKeyDown={(e) => handleClick(e)}>
          <h3>{valu.title}</h3>
          <div className="section__description"><p>{valu.description}</p></div>
        </div>
      </div>

      {modal && (
      <div className="modal__form">
        <h3>
          <BiArrowBack className="back__icon" onClick={handleClick} />
          {' '}
          <span>Edit Todo</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} className="form__control" onChange={(e) => setTitle(e.target.value)} />
          <br />
          <textarea value={description} className="form__control textarea" onChange={(e) => setDescription(e.target.value)} />
          <br />
          <div><button type="submit" className="form__control contact__button">Save</button></div>
        </form>
      </div>
      ) }
    </div>
  );
};

ItemList.propTypes = {
  valu: PropTypes.shape({
    isDone: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  val: PropTypes.string.isRequired,
};

export default ItemList;
