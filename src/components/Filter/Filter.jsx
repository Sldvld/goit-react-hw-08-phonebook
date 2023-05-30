import { useSelector, useDispatch } from 'react-redux';
import { selectContactFilter } from 'redux/contacts/contacts-selectors';
import { setContactFilter } from '../../redux/contacts/filterSlice';
import React from 'react';

import css from './Filter.module.css';
import { useState } from 'react';

export function Filter() {
  const filterDefault = useSelector(selectContactFilter);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const val = evt.currentTarget.value;
    setFilter(val);
    dispatch(setContactFilter(val));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.filterForm}
        name="filter"
        type="text"
        value={filter || filterDefault}
        onChange={handleChange}
        placeholder="Search..."
      />
    </>
  );
}
