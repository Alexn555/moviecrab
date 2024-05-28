import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  prev,
  next,
  selectPage,
} from '../reducer/moviesSlice';
import styles from '../movies.module.scss';

type PaginationProps = {
  onValueChange: Function;
};

export const Pagination: React.FC<PaginationProps> = ({ onValueChange }) => {
  const pageValue = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.row}>
        <div className={styles.nav}>
          <button
            className={styles.button}
            aria-label="page previous"
            onClick={() => { 
              dispatch(prev());
              onValueChange(pageValue.toString())
            }}
          >
            prev
          </button>
          <button
            className={styles.button}
            aria-label="page next"
            onClick={() => { 
              dispatch(next());
              onValueChange(pageValue.toString())
            }}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;