import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getMoviesAsync,
  Limits,
  selectMovies,
} from './reducer/moviesSlice';
import styles from './movies.module.scss';
import Table from './table/Table';
import Pagination from './pagination/pagination';

export function Movies() {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const [pageNum, setChangePage] = useState('1');
  const page = Number(pageNum) || 1;

  useEffect(() => {
    dispatch(getMoviesAsync(page));
  });

  const handlePageChange = (value: string) => {
    dispatch(getMoviesAsync(parseInt(value, 10)));
    setChangePage(value);
  };

  return (
    <div>
      <div className={styles.row}>
        <Table movies={movies}></Table> 
      </div>

      <Pagination onValueChange={handlePageChange}></Pagination>
      <div className={styles.rowBottom}>
        <input
          className={styles.textbox}
          aria-label="page number"
          value={pageNum}
          onChange={(e) => { 
            let pg = parseInt(e.target.value, 10);
            if (pg > Limits.input.min && pg < Limits.input.max) { 
                setChangePage(e.target.value); 
            } 
          }}
        />
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(getMoviesAsync(page))}
        >
          Movies
        </button>
      </div>
    </div>
  );
}
