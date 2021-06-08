import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/actions';
import { SelectContainer } from './Select.style';

const Select = ({ labelName, name }) => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.fetchCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch])

  const selectOptions = countries && countries.map((e, i) => <option value={e.name} key={i}>{e.name}</option>)

  return(
    <SelectContainer>
      <label htmlFor={name}>{labelName}</label>
      <select id={name} name={name} required>
        {selectOptions}
      </select>
    </SelectContainer>
  )
}

export default Select;