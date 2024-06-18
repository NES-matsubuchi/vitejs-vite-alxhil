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

const onClickEntryEntry = () => {
  location.href = '/entry';
};

const onClickDelete = () => {
  location.href = '/delete';
};

const onClickEdit = () => {
  location.href = '/edit';
};

export const TableViewMui = () => {
  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">削除/修正</TableCell>
                <TableCell align="center">機種</TableCell>
                <TableCell align="center">装置識別名</TableCell>
                <TableCell align="center">設置場所(県)</TableCell>
                <TableCell align="center">設置場所(市)</TableCell>
                <TableCell align="center">設置場所(表示名)</TableCell>
                <TableCell align="center">製品カテゴリ</TableCell>
                <TableCell align="center">製品名</TableCell>
                <TableCell align="center">装置グループ名</TableCell>
                <TableCell align="center">スタックメンバ－番号</TableCell>
                <TableCell align="center">出荷情報の存在有無チェック</TableCell>
                <TableCell align="center">登録結果</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                // chkbox: false,
                // IdentificationNumber: 1,
                // DeviceType: 'CISCO',
                // IdentificationName: 'abk-sdwan01',
                // prefecture: '東京',
                // city: '府中市',
                // InstallationLocation: 'NEC東京都府中ビル',
                // ProductCategory: 'ネットワーク機器',
                // ProductRevision: 'asr-1001x',
                // DeviceGroupName: '関東地方',
                // StackMemberNumber: null,
                // SerialNumberCheckTarget: true,
                // result: null,

                <TableRow
                  key={row.IdentificationNumber}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {/* {row.chkbox} */}
                    <input type="radio" name="radio" value="" color="black" />
                  </TableCell>
                  <TableCell align="center">
                    {row.IdentificationNumber}
                  </TableCell>
                  <TableCell align="center">{row.DeviceType}</TableCell>
                  <TableCell align="center">{row.IdentificationName}</TableCell>
                  <TableCell align="center">{row.prefecture}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">
                    {row.InstallationLocation}
                  </TableCell>
                  <TableCell align="center">{row.ProductCategory}</TableCell>
                  <TableCell align="center">{row.ProductRevision}</TableCell>
                  <TableCell align="center">{row.StackMemberNumber}</TableCell>
                  <TableCell align="center">
                    {row.SerialNumberCheckTarget}
                  </TableCell>
                  <TableCell align="center">{row.result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>{' '}
      </div>
    </>
  );
};
