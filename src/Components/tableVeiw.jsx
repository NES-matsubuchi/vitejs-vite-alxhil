import { useTable } from 'react-table';
import { columns, data } from './tableData';
// import './tableView.css';

import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TableViewMui } from '../Components/tableViewMui';

const onClickEntryEntry = () => {
  location.href = '/entry';
};

const onClickDelete = () => {
  location.href = '/delete';
};

const onClickEdit = () => {
  location.href = '/edit';
};

export const TableView = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <div id="title-alia">
        <h1 style={{ color: 'black' }}>装置情報一覧</h1>
      </div>
      <div id="button-aria">
        <button onClick={onClickEntryEntry}>登録</button>
        <button onClick={onClickDelete}>削除</button>
        <button onClick={onClickEdit}>修正</button>
        {/* <Stack direction="row" spacing={2} textAlign="center">
          <Button variant="outlined" onClick={onClickEntryEntry}>
            登録
          </Button>
          <Button variant="outlined" onClick={onClickDelete}>
            削除
          </Button>
          <Button variant="outlined" onClick={onClickEdit}>
            修正
          </Button>
        </Stack> */}
      </div>
      {/* <div id="table-aria">
        <table className="list-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                    {column.render('Header')}
                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, j) => {
                    if (j === 0) {
                      return (
                        <td>
                          <input
                            type="radio"
                            name="radio"
                            value=""
                            color="black"
                          />
                        </td>
                      );
                    } else {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      <TableViewMui />
    </>
  );
};
