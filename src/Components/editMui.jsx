import './entry.css';
import { TextField } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { columns, data } from './tableData';

const row = data[0];

export const EditMui = () => {
  return (
    <div>
      <form>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">機種 :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="DeviceType"
                    variant="standard"
                    defaultValue={row.DeviceType}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">装置識別名 :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="IdentificationName"
                    variant="standard"
                    defaultValue={row.IdentificationName}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">設置場所(県) :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="prefecture"
                    variant="standard"
                    defaultValue={row.prefecture}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">設置場所(市) :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="city"
                    variant="standard"
                    defaultValue={row.city}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">設置場所(表示名) :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="InstallationLocation"
                    variant="standard"
                    defaultValue={row.InstallationLocation}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">製品カテゴリ :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="ProductCategory"
                    variant="standard"
                    defaultValue={row.ProductCategory}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">製品名 :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="ProductRevision"
                    variant="standard"
                    defaultValue={row.ProductRevision}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">装置グループ名 :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="DeviceGroupName"
                    variant="standard"
                    defaultValue={row.DeviceGroupName}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">スタックメンバ－番号 :</TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="StackMemberNumber"
                    variant="standard"
                    defaultValue={row.StackMemberNumber}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  出荷情報の存在有無チェック :
                </TableCell>
                <TableCell align="center">
                  {' '}
                  <TextField
                    type="text"
                    name="SerialNumberCheckTarget"
                    variant="standard"
                    defaultValue={row.SerialNumberCheckTarget}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>{' '}
        <input type="submit" value="修正"></input>
        <input type="reset" value="取消"></input>
      </form>
    </div>
  );
};
