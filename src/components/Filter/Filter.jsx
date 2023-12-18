import { useDispatch } from 'react-redux';

import { useFilter } from 'hooks';

import { setFilter } from '/src/redux/filter/slice.js';

import {
  BgFocus,
  Input,
  InputName,
  InputWrap,
  SearchIcon,
} from './Filter.style';

export const Filter = () => {
  const { filterValue } = useFilter();

  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <InputWrap>
      <SearchIcon />
      <Input
        debounceTimeout={300}
        value={filterValue}
        onChange={onChange}
        type="text"
        required
        autoComplete="off"
        placeholder="&nbsp;"
      />
      <InputName>Find contacts</InputName>

      <BgFocus></BgFocus>
    </InputWrap>
  );
};
