import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

// API를 사용하기 위한 기본적인 변수 및 함수
const baseUrl = 'https://api-beta.midasit.com:443';
const programType = 'gen';

function checkExistQuerystring() {
  const mapiKeyQuery = getMapiKey();
  console.log(mapiKeyQuery);
  if (mapiKeyQuery === null) return;
  const currentQueryStringDot = document.getElementById('current-querystring-dot');
  currentQueryStringDot.style.backgroundColor = '#059669';
  const currentQueryString = document.getElementById('current-querystring');
  currentQueryString.innerHTML = `Current QueryString is ${mapiKeyQuery}`;
  currentQueryString.style.color = '#059669';
  currentQueryString.style.fontWeight = '700';
  document.getElementById('querystring-wrapper').style.display = 'none';
}

function getMapiKey() {
  // url에서 params를 가져오고 mapiKey를 get 합니다.
  const params = new URLSearchParams(window.location.search);
  return params.get("mapiKey");
}

// QueryString을 만드는 함수
function makeQueryString() {
  const inputValue = document.getElementById('querystring-input').value;
  const queryString = '?mapiKey=' + inputValue;
  document.getElementById('querystring-output').textContent = queryString;
}

// MAPI-Key가 올바른지 확인하는 함수
async function checkMapiKey() {
  // mapiKey를 QueryString으로부터 가져 옵니다.
  const mapiKey = getMapiKey();

  const response = await fetch(`${baseUrl}/mapiKey/verify`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'MAPI-Key': mapiKey
    }
  });

  // 응답 결과를 getnode-output id를 가진 DOM 객체에 전달합니다.
  document.getElementById('status-output').textContent = 
    JSON.stringify(await response.json(), null, 2);
}

//TABLE 생성 함수
function CreateTable({ columns, rows }) {
  const borderStyle = { 
    border: '1px solid #000',
    borderCollapse: 'collapse',
    textAlign: 'center',
    padding: '5px'
  };

  return (
    <table style={borderStyle}>
      <thead>
        <tr>
          {columns.map((column) => ( <th key={column} style={borderStyle}>{column}</th> ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ key, x, y, z }) => (
          <tr key={key + x + y + z}>
            <td style={borderStyle}>{key}</td>
            <td style={borderStyle}>{x}</td>
            <td style={borderStyle}>{y}</td>
            <td style={borderStyle}>{z}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

//GET NODE 버튼 클릭 시 동작
async function getNodeFetch() {
  const mapiKey = getMapiKey();
  const response = await fetch(`${baseUrl}/${programType}/db/node`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'MAPI-Key': mapiKey
  }});

  // NODE에 대한 Columns, Rows 정보 생성
  const columns = [ "NODE", "X", "Y", "Z" ];
  const data = await response.json();
  const nodes = data["NODE"];
  const rows = [];
  for (const key of Object.keys(nodes)) {
    rows.push({
      key: key,
      x: nodes[key].X,
      y: nodes[key].Y,
      z: nodes[key].Z,
    });
  }

  ReactDOM.createRoot(document.getElementById('getnode-output')).render(CreateTable({columns, rows}));
}


function App() {
  //아래 header, main, footer가 최초로 생성될 때 동작하는 함수입니다.
  useEffect(() => { checkExistQuerystring(); }, []);

  return (
  <>
    <header>
      <h1 class="header-h1">Simple Table for MAPI-Key</h1>
    </header>

    <main>
      <section>
        <h3 class="main-sec1-h3">Quick Start</h3>
        <p class="main-sec-p">Test it according to the procedure.</p>
        <span id="current-querystring-dot"></span>
        <p id="current-querystring" class="main-sec-p">Current QueryString is not exist.</p>
      </section>

      <section class="main-sec2">
        <div class="main-sec2-wrapper">
          <div id="querystring-wrapper">
            <p class="main-sec-p main-purple-600"><b>Add MAPI-Key</b> to the Edit Box below and <b>create QueryString.</b></p>
            <div class="main-sec2-col">
              <input type="text" id="querystring-input" class="main-sec2-col-input" placeholder="Paste to MAPI-Key" />
              <button type="button" onClick={makeQueryString} class="main-sec2-col-button">Create a QueryString</button>
            </div>
            <pre id='querystring-output'>. . .</pre>
            <p class="main-sec-p main-purple-600"><b>Copy and paste</b> the above string directly into the address bar</p>
            <img src="img/copypaste.png" alt="" />
          </div>
          <p class="main-sec-p main-purple-600 main-p-default"><b>Make sure the MAPI-Key</b> is in the correct form.</p>
          <button type="button" onClick={checkMapiKey} class="main-sec2-col-button">Verify MAPI-Key</button>
          <pre id='status-output'>. . .</pre>
          <p class="main-sec-p main-purple-600 main-p-default">Click the button below to <b>get NODE Data.</b></p>
          <button type="button" onClick={getNodeFetch} class="main-sec2-col-button">GET NODE</button>
          <pre id="getnode-output">. . .</pre>
        </div>
      </section>
    </main>

    <footer>
      <h3 class="footer-h3">-</h3>
    </footer>
  </>
  );
}

// "index.html"의 <div>중 id="root"를 찾아옵니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// id="root"를 가진 div에 아래 html 코드를 렌더링 해줍니다.
root.render(<App />);
