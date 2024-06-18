import './entry.css';
import { columns, data } from './tableData';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const row = data[0];

export const DeleteMui = () => {
  return (
    <form>
      <Grid container justify="center">
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Box display="flex" alignItems="center">
              <Table sx={{ maxWidth: 600 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">機種 :</TableCell>
                    <TableCell align="center">{row.DeviceType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">装置識別名 :</TableCell>
                    <TableCell align="center">
                      {row.IdentificationName}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">設置場所(県) :</TableCell>
                    <TableCell align="center">{row.prefecture}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">設置場所(市) :</TableCell>
                    <TableCell align="center">{row.city}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">設置場所(表示名) :</TableCell>
                    <TableCell align="center">
                      {row.InstallationLocation}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">製品カテゴリ :</TableCell>
                    <TableCell align="center">{row.ProductCategory}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">製品名 :</TableCell>
                    <TableCell align="center">{row.ProductRevision}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">装置グループ名 :</TableCell>
                    <TableCell align="center">{row.DeviceGroupName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">スタックメンバ－番号 :</TableCell>
                    <TableCell align="center">{row.DeviceType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      出荷情報の存在有無チェック :
                    </TableCell>
                    <TableCell align="center">
                      {row.StackMemberNumber}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </TableContainer>{' '}
          <input type="submit" value="削除"></input>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </form>
  );
};
