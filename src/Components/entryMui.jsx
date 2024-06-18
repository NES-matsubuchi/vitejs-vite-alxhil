// import './entry.css';
import { TextField } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const EntryMui = () => {
  return (
    <div>
      <form>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
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
                    placeholder="機種を入力"
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
                    placeholder="装置識別名を入力"
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
                    placeholder="設置場所(県)を入力"
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
                    placeholder="設置場所(市)を入力"
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
                    placeholder="設置場所(表示名)を入力"
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
                    placeholder="製品カテゴリを入力"
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
                    placeholder="製品名を入力"
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
                    placeholder="装置グループ名を入力"
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
                    placeholder="スタックメンバ－番号を入力"
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
                    placeholder="出荷情報の存在有無チェックを入力"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>{' '}
        <input type="submit" value="登録"></input>
        <input type="reset" value="取消"></input>
      </form>
    </div>
  );
};
