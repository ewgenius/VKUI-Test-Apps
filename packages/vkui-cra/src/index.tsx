import React from "react";
import ReactDOM from "react-dom";
import {
  ConfigProvider,
  AdaptivityProvider,
  WebviewType,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider isWebView={true} webviewType={WebviewType.INTERNAL}>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
