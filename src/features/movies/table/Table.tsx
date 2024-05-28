import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import SortIcon from '@material-ui/icons/ArrowDownward';
import DataTable from 'react-data-table-component';
import styles from './table.module.scss';
import { TableType } from './TableType';

type TableProps = {
  movies: Array<TableType>;
};

export const Table: React.FC<TableProps> = ({ movies }) => {
  const checkMobile = (w: number): boolean => {
    return w < 769;
  };

  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = checkMobile(width)
  const [rows, setRows] = useState(isMobile ? 10 : 20);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    if (checkMobile(window.innerWidth)) {
      setRows(10);
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const formatPoster = (row: string) => {
    return(
      <span>
        <img src={"https://image.tmdb.org/t/p/original/" + row}
          alt="Poster loading..."
          width="100" height="80" />
      </span>
    )
  };

  let columns: any = [
    {
      name: "Title",
      selector: (row: { title: string; }) => row.title,
      sortable: true,
      maxWidth: '200px',
    },
    {
      name: "Popularity",
      selector: (row: { popularity: number; }) => row.popularity,
      sortable: true,
      maxWidth: '300px',
    },
    {
      name: "Overview",
      selector: (row: { overview: string; }) => row.overview,
      sortable: true,
      maxWidth: '400px',
    }, 
    {
      name: "Relase date",
      selector: (row: { release_date: string; }) => row.release_date,
      sortable: true,
      maxWidth: '200px',
    }, 
    {
      name: "Poster",
      selector: (row: { poster_path: string; }) => row.poster_path,
      sortable: false,
      maxWidth: '200px',
      format: (row: { poster_path: string }) => { return formatPoster(row.poster_path)}
    }, 
  ];

  if (isMobile) {
    let mobileColumns = columns.filter((column: any) => {
        return column.name !== 'Overview';
    });
    columns = mobileColumns;
  }
  
  return (
    <section className={styles.tableWrapper}>
      <Card>
        <DataTable
          title="Movies"
          columns={columns}
          data={movies}
          defaultSortFieldId="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          paginationPerPage={rows}
        />
      </Card>
    </section>
  );
};

export default Table;
