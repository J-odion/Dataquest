import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./pages/extractor";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./App/Store";
import Layout from "./components/Layouts";
// import ExtractData from './pages/extractor/extraction';
import ExtraData from "./components/ExtractData/extractData";
import Invoicer from "./components/Invoice";
// import DropFileInput from "./components/ExtractData/drag";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Signing from "./components/SignIn/Signing";
import ApproveFile from "./components/ApproveFile/ApproveFile";
import ManageFields from "./components/ManageField/ManageField";

const root = ReactDOM.createRoot(document.getElementById("root"));
const onChangeFile = (file) => {
  console.log(file);
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout><App /></Layout>} /> */}
          <Route path="/Signing" element={<Signing />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<App />} />
            <Route path="/extract" element={<ExtraData />} />
            {/* <Route
              path="/DropFileInput"
              element={
                <DropFileInput onChange={(files) => onChangeFile(files)} />
              }
            /> */}
            <Route path="/Invoice" element={<Invoicer />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/ApproveFile" element={<ApproveFile />} />
            <Route path="/ManageField" element={<ManageFields />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
