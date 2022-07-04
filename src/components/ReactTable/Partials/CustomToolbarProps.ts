export type GlobalFilterProps = {
  globalFilter: string;
  preGlobalFilteredRows: any[];
  setGlobalFilter: (filter: string) => void;
};

export type CustomToolbarProps = GlobalFilterProps & {
  selectedRows: any[];
  onDelete: (rows: any[]) => void;
};
