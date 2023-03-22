# :zap: Getting Stated With React Simple Table

This repository offers M-API experiences using the "GET NODE" function.\
Instead of using HTML, you can create a readable web page with [React Library](https://ko.reactjs.org/).\
The overall structure is similar to the HTML, vitalize fixed `index.html`using `index.js`!
<br /><br />

## [Demo Page](https://kh1012.github.io/sproj-react-simple-table)
You can move to the test page through the link.
<br /><br />

## Prerequisite

Before using this repository, the user needs prerequisites, including all [Getting Started With React](https://github.com/kh1012/sproj-prerequisite/tree/main/react). \
As possible, it is good to download guided software and use the latest version. `LTS`
<br /><br />

## Quick Start

Introduce the preparation process to use this repository.
<br /><br />

### Download the repository on the user's personal computer
<br />

- Download the repository by clicking`Code` and the `Download ZIP` button on the upper right side of this page.\
  <br />
  <img src="./img/download.png" width="400px" />
- Unzip the downloaded folder and designate the folder path as the user wants.\
  The folder has a little bit more files than HTML.\
  <br />
  ![img](./img/releasezip.png)
<br /><br />

### Install the package for using
<br />

- In case of `react`, when executing `index.html`right after downloading, there's nothing on the web page generally.\
  During loading the web page, HTML becomes dynamic behavior through javascript.\
  (For the specifications, please refer here [react-Rendering Elements.](https://ko.reactjs.org/docs/rendering-elements.html).)\
  For several reasons, the user needs to install the required package for execution.\
  <br />
- The 'Node package manager (npm)' was installed together when you installed `NodeJS`.\
  npm is a package to install and handles various libraries easily that uses in NodeJS.\
  Also, npm can be written as `npm commands`in the VSCode terminal.\
  Please check the variety of information here:[npm-docs](https://docs.npmjs.com/)\
  <br />
- Run the `VSCode`.\
  Open the unzip downloaded folder`File - Open Folder...` or `Ctrl + K, O`\
  <br />
  <img src="./img/openvscode.png" width="800px">\
  <br />
  The `Explorer`was changed as below.\
  <br />
  ![img](./img/listvscode.png)\
  <br />
- Select and activate the terminal for installing package `VSCode`-`View - Terminal.`\
  <br />
  ![img](./img/terminalvscode.png)\
  <br />
  Input `npm i` or `npm install`in the activated terminal and run.\
  (If you installed `NodeJS` in the past, you could execute npm(node package manager).)\
  The package is installed automatically and pops up "finish".\
  <br />
  ![img](./img/npmivscode.png)
<br /><br />

### Execiting
<br />

- `npm start`\
  To open the web page, input `npm start` in the terminal used in the previous step.\
  <br />
  <img src="./img/npmstartvscode.png" width="600px">\
  <br />
  <img src="./img/openreact.png" width="600px">
<br /><br />

### Completion
<br />

- `Ctrl + C`\
  To complete executed react server, click the activated terminal and press `Ctrl + C`.\
  <br />
  ![img](./img/stopreact.png)\
  <br />
  The complete message pops up if completed successfully, and the cursor status flicks as above.
<br /><br />

### Run Build
<br />

- `npm run build`\
  Creating and uploading MIDAS API Plug-ins using react only needs well-made result files using react.\
  All the data can be extracted as optimized HTML and JavaSctipt format without upload used In the development environment.\
  These processes are called "Build."\
  Typing `npm run build` in the terminal.\
  <br />
  ![img](./img/npmbuildvscode.png)\
  <br />
  For the last step, upload the result files on the MIDAS API Plugin website.
<br /><br />

### Main Code Information
<br />

- Unlike HTML, the internal folder has /public and /src.
  - `/public`
    - index.html file exists. \
      Unlike conventional HTML, only `<div id="root>` exists inside the `<body>` tag.\
      As explained in the beginning, div object of id="root" convert to dynamic behavior by `/src/index.js.`
  - `/src`
    - Existed JavaScript file using react libraries.
      - Important variables and functions are as below.
        - `baseUrl`: URL in the MIDAS API Server.
        - function `getMapiKey()`: The function that brings the MAPI-KEY from URL QueryString.
        - function `getNodeFetch()`: Brings Node information from connected product through MIDAS API.
        - function `createTable()`: Unlike the existing HTML `<table>, <thead>, <tbody>, <tr>, <th>, <td>` method, we created a function to create a table in a more intuitive form. For more information here: [react table searcj result](https://www.google.com/search?q=react+table)!
        - There is a web page's appearance section in the part of HTML. [MDN-HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
        - It appears as a list using ul and li tags.
          - Please check about [MDN-ul](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul)!
          - Please check about [MDN-li](https://developer.mozilla.org/ko/docs/Web/HTML/Element/li)!
