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

export const Entry = () => {
  return (
    <div>
      <form>
        <table className="input-table">
          <tbody>
            <tr>
              <td>機種 : </td>
              <td>
                {/* <input placeholder="機種を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="機種を入力"
                />
              </td>
            </tr>
            <tr>
              <td>装置識別名 :</td>
              <td>
                {/* <input placeholder="装置識別名を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="装置識別名を入力"
                />
              </td>
            </tr>
            <tr>
              <td>設置場所(県) :</td>
              <td>
                {/* <input placeholder="設置場所(県)を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="設置場所(県)を入力"
                />
              </td>
            </tr>
            <tr>
              <td>設置場所(市) :</td>
              <td>
                {/* <input placeholder="設置場所(市)を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="設置場所(市)を入力"
                />
              </td>
            </tr>
            <tr>
              <td>設置場所(表示名) :</td>
              <td>
                {/* <input placeholder="設置場所(表示名)を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="設置場所(表示名)を入力"
                />
              </td>
            </tr>
            <tr>
              <td>製品カテゴリ :</td>
              <td>
                {/* <input placeholder="製品カテゴリを入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="製品カテゴリを入力"
                />
              </td>
            </tr>
            <tr>
              <td>製品名 :</td>
              <td>
                {/* <input placeholder="製品名を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="製品名を入力"
                />
              </td>
            </tr>
            <tr>
              <td>装置グループ名 :</td>
              <td>
                {/* <input placeholder="装置グループ名を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="装置グループ名を入力"
                />
              </td>
            </tr>
            <tr>
              <td>スタックメンバ－番号 :</td>
              <td>
                {/* <input placeholder="スタックメンバ－番号を入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="スタックメンバ－番号を入力"
                />
              </td>
            </tr>
            <tr>
              <td>出荷情報の存在有無チェック :</td>
              <td>
                {/* <input placeholder="出荷情報の存在有無チェックを入力" /> */}
                <TextField
                  type="text"
                  name="DeviceType"
                  variant="standard"
                  placeholder="出荷情報の存在有無チェックを入力"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* <ul className="input-list">
        <li>
          <div className="input-area">
            <p width="auto">
              機種 :
              <input placeholder="機種を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              装置識別名 :
              <input placeholder="装置識別名を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              設置場所(県) :
              <input placeholder="設置場所(県) を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              設置場所(市) :
              <input placeholder="設置場所(市) を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              設置場所(表示名) :
              <input placeholder="設置場所(表示名) を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              製品カテゴリ :
              <input placeholder="製品カテゴリ を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              製品名 :
              <input placeholder="製品名 を入力" />
            </p>
          </div>
        </li>
        <li>
          <div className="input-area">
            <p width="auto">
              装置グループ名 :
              <input placeholder="装置グループ名 を入力" />
            </p>
          </div>
        </li>
      </ul> */}
        <input type="submit" value="登録"></input>
        <input type="reset" value="取消"></input>
      </form>
    </div>
  );
};
