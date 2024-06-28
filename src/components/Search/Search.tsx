/* src/components/Search/Search */

import { useState, ChangeEvent, KeyboardEvent, FC } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  onSearch: (query: string[]) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [searchMode, setSearchMode] = useState<'AND' | 'OR'>('AND');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const finalQuery = [query, searchMode, '3'];
    console.log(finalQuery);
    onSearch(finalQuery);
  };

  const toggleSearchMode = (mode: 'AND' | 'OR') => {
    setSearchMode(mode);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder=""
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleButton} ${searchMode === 'AND' ? styles.toggleButtonActive : ''}`}
            onClick={() => toggleSearchMode('AND')}
          >
            AND
          </button>
          <button
            className={`${styles.toggleButton} ${searchMode === 'OR' ? styles.toggleButtonActive : ''}`}
            onClick={() => toggleSearchMode('OR')}
          >
            OR
          </button>

        </div>
      </div>
    </div>
  );
};

export default Search;