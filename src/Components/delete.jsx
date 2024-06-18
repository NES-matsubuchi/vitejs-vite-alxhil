import './entry.css';

export const Delete = () => {
  return (
    <div>
      <form>
        <table className="input-table">
          <tbody>
            <tr>
              <td>機種 : </td>
              <td>CISCO</td>
            </tr>
            <tr>
              <td>装置識別名 :</td>
              <td>abk-sdwan01</td>
            </tr>
            <tr>
              <td>設置場所(県) :</td>
              <td>東京</td>
            </tr>
            <tr>
              <td>設置場所(市) :</td>
              <td>府中市</td>
            </tr>
            <tr>
              <td>設置場所(表示名) :</td>
              <td>NEC東京都府中ビル</td>
            </tr>
            <tr>
              <td>製品カテゴリ :</td>
              <td>ネットワーク機器</td>
            </tr>
            <tr>
              <td>製品名 :</td>
              <td>asr-1001x</td>
            </tr>
            <tr>
              <td>装置グループ名 :</td>
              <td>関東地方</td>
            </tr>
            <tr>
              <td>スタックメンバ－番号 :</td>
              <td></td>
            </tr>
            <tr>
              <td>出荷情報の存在有無チェック :</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="削除"></input>
      </form>
    </div>
  );
};
