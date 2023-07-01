import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput value={filter.query}
          onChange={event => setFilter({...filter, query: event.target.value})}
          placeholder='search...'
      />

      <MySelect value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="sorting"
          options={[
            {value: 'title', name: 'for name'},
            {value: 'body', name: 'for description'}
          ]}
      />

    </div>
  )
}

export default PostFilter;