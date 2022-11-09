import React, { useState, useRef } from 'react';
import './SearchModal.css';

const SearchModal = (props) => {
  const [search, setSearch] = useState('');

  return (
    props.show && (
      <div class="modal">
        <input
          type="text"
          placeholder="What are we looking for today?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </div>
    )
  );
};
export default SearchModal;
