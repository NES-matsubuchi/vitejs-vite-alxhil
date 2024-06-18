import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ColorfulMessage } from './Components/ColorfulMessage';
// import { Header } from './Components/Header';
import './App.css';

import { TableView } from './Components/tableVeiw';
import { EntryMui } from './Components/entryMui';
import { EditMui } from './Components/editMui';
import { DeleteMui } from './Components/deleteMui';

export const App = () => {
  console.log('---App---');
  const [manufactureInitialRegist, setManufactureInitialRegist] = useState([
    {
      chkbox: null,
      idNum: null,
      idName: null,
      location: null,
      prefecture: null,
      city: null,
      category: null,
      ProdName: null,
      devGroupName: null,
      stackNum: null,
      check: null,
      result: null,
    },
  ]);

  const [isShowFace, setIsShowFace] = useState(true);

  // useEffect(() => {
  //   console.log('---useEffect---');
  //   if (num >= 3 && num % 3 === 0) {
  //     isShowFace || setIsShowFace(true);
  //   } else {
  //     isShowFace && setIsShowFace(false);
  //   }
  // }, [num]);

  return (
    <>
      <Router>
        {/* <div className="Header">
        <Header />
      </div>
      */}
        <Link to="/">Homeへ</Link>

        <Routes>
          <Route path={'/'} element={<TableView />} />
          <Route path={'/entry'} element={<EntryMui />} />
          <Route path={'/delete'} element={<DeleteMui />} />
          <Route path={'/edit'} element={<EditMui />} />

          {/* <div id="title-alia">
        <h1 style={{ color: 'black' }}>装置情報一覧</h1>
      </div>
      <div id="button-aria">
        <button onClick={onClickCountUp}>登録</button>
        <button onClick={onClickToggle}>削除</button>
        <button onClick={onClickCountUp}>修正</button>
      </div>
      <div id="table-aria">
        <table {...getTableProps()}>
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
        </Routes>
      </Router>
    </>
  );
};
