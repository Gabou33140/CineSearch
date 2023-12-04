import React, { useState, useCallback } from 'react';
import fetchSearchResults, { useFetchSearchResultsQuery } from '../features/api'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = useCallback(searchTerm: string, ) => {
    onSearch(searchTerm);
    useFetchSearchResultsQuery(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;

function onSearch(searchTerm: any) {
  throw new Error('Function not implemented.');
}
