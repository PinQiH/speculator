# speculator
用 Node.js 打造屬於自己的投資系統<br>
Reference: https://ithelp.ithome.com.tw/users/20150150/ironman/5145 <br><br>
node_modules: <br>

1. 專案初始化： 當你使用 npm init 或 yarn init 命令來建立新的 Node.js 專案時，會生成一個 package.json 檔案，其中包含了專案所需的依賴套件資訊。當你執行 npm install 或 yarn install 命令時，Node.js 套件管理器（npm 或 Yarn）會根據 package.json 中的依賴資訊，自動下載並安裝所需的套件到 node_modules 目錄中。這是 Node.js 專案的常見起始步驟。<br>

2. 新增新的依賴套件： 當你使用 npm install、yarn add 或其他新增依賴套件的指令時，Node.js 套件管理器會下載並安裝新的套件到 node_modules 目錄中。這些套件通常是你專案需要的程式庫或模組。<br>

3. 複製或拉取專案： 如果你從版本控制系統（如 Git）中複製或拉取一個包含 package.json 的現有專案，你可以透過執行 npm install 或 yarn install 來安裝專案所需的依賴。這將會建立 node_modules 目錄並下載依賴項。<br>


