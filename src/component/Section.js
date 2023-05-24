import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import ListTodoTitle from './ListTodoTitle';

const Section = ({ bar }) => {
  const title = useSelector((state) => state.TodoLists.TodoLists);
  console.log(title);
  return (
    <div className={`${bar ? 'section__main' : 'section__main start__section'}`}>
      <div className="section__header">
        <h1 className="section__title">Section</h1>
      </div>
      <div className="section__todo grid__todo scrollmenu ">
        {title && title.map((val) => (<ListTodoTitle val={val.id} key={val.id} />))}
        <AddTodo bar={bar} />
      </div>
    </div>
  );
};

Section.propTypes = {
  bar: PropTypes.bool.isRequired,
};
export default Section;
