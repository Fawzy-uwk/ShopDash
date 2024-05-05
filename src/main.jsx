import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.scss"
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./Contexts/ContextProvider.jsx";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXtdcHVURmlfV0VyXEA="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
