import './entry.css';

export const Edit = () => {
  return (
    <div>
      <form>
        <table className="input-table">
          <tbody>
            <tr>
              <td>機種 : </td>
              <td>
                <input placeholder="CISCO" />
              </td>
            </tr>
            <tr>
              <td>装置識別名 :</td>
              <td>
                <input placeholder="abk-sdwan01" />
              </td>
            </tr>
            <tr>
              <td>設置場所(県) :</td>
              <td>
                <input placeholder="東京" />
              </td>
            </tr>
            <tr>
              <td>設置場所(市) :</td>
              <td>
                <input placeholder="府中市" />
              </td>
            </tr>
            <tr>
              <td>設置場所(表示名) :</td>
              <td>
                <input placeholder="NEC東京都府中ビル" />
              </td>
            </tr>
            <tr>
              <td>製品カテゴリ :</td>
              <td>
                <input placeholder="ネットワーク機器" />
              </td>
            </tr>
            <tr>
              <td>製品名 :</td>
              <td>
                <input placeholder="asr-1001x" />
              </td>
            </tr>
            <tr>
              <td>装置グループ名 :</td>
              <td>
                <input placeholder="関東地方" />
              </td>
            </tr>
            <tr>
              <td>スタックメンバ－番号 :</td>
              <td>
                <input placeholder="" />
              </td>
            </tr>
            <tr>
              <td>出荷情報の存在有無チェック :</td>
              <td>
                <input placeholder="" />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="修正"></input>
        <input type="reset" value="取消"></input>
      </form>
    </div>
  );
};
