export type TableType = {
    id?: number;
    title: string;
    overview: string;
    popularity: number;
    release_date: string;
    poster_path: string;
};

export type TableColumnType = {
    name: string;
    selector: string | number;
    sortable: boolean;
    maxWidth?: number;
    format?: Function;
};