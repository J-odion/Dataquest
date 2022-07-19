// import extradata css

import ButtonJsx from "./Button";

import React, { useState } from "react";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { notification } from "antd";
// import DropFile from "./dropFile";
import DropFileInput from "./drag";
import "./ExtractData.css";

export default function ExtractData() {
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);

  console.log("clicked");

  const upload = (e) => {
    document.querySelector("#uploadHandle").click(); // click the hidden file input
  };

  const UploadFiles = (e) => {
    /* upload files get from the hidden file input */

    const file = e.target.files[0];
    if (file["type"] != "application/pdf") {
      notification.error({
        message: "invalid file type",
        description: "filtype must be a pdf",
        duration: 4,
      });
      return;
    }
    setFiles([...files, file]); // add the file to the list
    setFilteredFiles([...filteredFiles, file]); // add the file to the list
  };
  const filterFiles = (e) => {
    const file = e.target.value.trim();
    if (file) {
      // set files filter with lowercase
      setFilteredFiles(
        files.filter((f) => f.name.toLowerCase().includes(file.toLowerCase()))
      );
      return;
    }
    setFilteredFiles(files);
  };

  const downloadExtractData = () => {
    const data = new Blob([JSON.stringify(filteredFiles)], {
      type: "application/json",
    });
    console.log(data);
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = "extractData.json";
    link.click();
  };

  const onChange = (file) => {
    console.log(file);
  };
  return (
    <>
      <div className="frame-div1663">
        <div className="pages-remaining-for-this-month9">
          9977 Pages remaining for this month.
        </div>
        <div className="group-div51">
          <div className="group-div52">
            <div className="group-div52">
              <div className="frame-div1664">
                {/* <img className="vector-icon105" alt="" src="vector77.svg" /> */}
                <a href="mailto:rohit@gmail.com" className="manu-div4">
                  rohit@nanonets.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div1665">
        <div className="frame-div1666">
          <div className="frame-div1667">
            {/* <img className="image-2-icon3" alt="" src="image-2@2x.png" /> */}
            <div className="frame-div1668">
              {/* <div className="set-up-your-invoices-workflow3">
                Set up your Invoices workflow
              </div> */}
              {/* <div className="automate-processes-with-our-ad3">
                Automate processes with our addons-import, formatting, approvals
                and export.
              </div> */}
            </div>
          </div>
          <div className="group-div54">
            <div className="group-div55">
              <div className="group-div55">
                {/* <div className="frame-div1669">
                  <div className="manu-div4">Set up your workflow</div>
                  <img className="frame-icon88" alt="" src="frame-7397.svg" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div1670">
          <div className="frame-div1671">
            <div className="set-up-your-invoices-workflow3">
              <button
                style={{
                  border: "none",
                  padding: "1rem 1.5rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                Extract Data
              </button>
            </div>
            {/* <div className="frame-div1672"> */}
            {/* <img className="frame-icon89" alt="" src="frame-73971.svg" /> */}
            <button
              className="manu-div4"
              style={{
                border: "none",
                padding: "1rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
            >
              Model Settings
            </button>
            {/* </div> */}
          </div>
          {/* <div className="frame-div1672"> */}
          {/* <img className="frame-icon90" alt="" src="frame-73972.svg" /> */}
          <button
            className="manu-div4"
            style={{
              border: "none",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Improve model
          </button>
          {/* </div> */}
        </div>
      </div>

      <div className="frame-div1674">
        <div className="extra-body"
        style={{
          padding: "1rem",
          margin: "1rem",
          
        }}
        >

          <div className="extra-middle">
            <div className="extra-data-middle-left">
              <ul>
                <li>
                  <a href="#">All Files</a>
                </li>
                <li>
                  <a href="#">All Files</a>
                </li>
                <li>
                  <a href="#">All Files</a>
                </li>
              </ul>
            </div>
            <div className="extra-data-middle-right">
              {/* search input */}
              <input
                type="text"
                placeholder="Search"
                // onChange={filterFiles}
              />
              <a href="#">Filter</a>
            </div>
          </div>
          <div
            className="extra-data-table"
            style={{
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
              border: "1px solid #e8e8e8",
              width: "100%",
              height: "70px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fafafa",
            }}
          >
            <table
              // add border to table and make header gray
              style={{
                borderCollapse: "collapse",
                // backgroundColor: "#f8f8f8",
                width: "100%",
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "500",
                color: "#333",
                padding: "10px",
                margin: "0",
                borderRadius: "5px",
              }}
            >
              <thead style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
                <tr style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin:"0 30px"
                }}>
                  <th>S/N</th>
                  <th></th>
                  <th>FileName</th>
                </tr>
                <tr>
                  <th>Validation</th>
                  <th>Manuual review</th>
                  <th>Uploaded at</th>
                  <th>Assigned to</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody> */}
              {/* {filteredFiles.map((file, index) => {
                    return <FileList number={index} files={file} />;
                  })}
                </tbody> */}
            </table>
          </div>
        </div>
        <div className="frame-div1718">
          <ButtonJsx
            name="Upload Files"
            icon={<PlusOutlined />}
            background="#DB535B"
            box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
            border-radius="8px"
            borderColor="#E2E2EA"
            onClick={upload}

            // onClick={upload}
          />
          <ButtonJsx
            name="Download Extracted Data"
            icon={<PlusOutlined />}
            background="#DB535B"
            box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
            border-radius="8px"
            borderColor="#E2E2EA"
            onClick={upload}

            // onClick={upload}
          />
          <ButtonJsx
            name="Setup Auto Download"
            icon={<PlusOutlined />}
            background="#DB535B"
            box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
            border-radius="8px"
            borderColor="#E2E2EA"
            onClick={upload}

            // onClick={upload}
          />
        </div>
      </div>
    </>
  );

  //   return (
  //     <>
  //       <div className="extra-data">
  //         <div className="extra-header">
  //           <p>999 pages remaining for this month</p>
  //           <div className="extra-mail-container">
  //             <p>icon</p>
  //             <a href="rohit@gmail.com">rohit@gmail.com</a>
  //           </div>
  //         </div>
  //         <div className="line"></div>
  //         <div className="button-data">
  //           <div className="button-data-left">
  //             <ButtonJsx name="Extract Data" icon={<PlusOutlined />} />
  //             {/* download extracted data button */}
  //             <ButtonJsx name="Model Settings" icon={<DownloadOutlined />} />
  //           </div>
  //           <div className="button-data-right">
  //             <ButtonJsx name="Extract Data" icon={<PlusOutlined />} />
  //           </div>
  //         </div>
  //         <div className="extra-body">
  //           <div className="extra-middle">
  //             <div className="extra-data-middle-left">
  //               <ul>
  //                 <li>
  //                   <a href="#">All Files</a>
  //                 </li>
  //                 <li>
  //                   <a href="#">All Files</a>
  //                 </li>
  //                 <li>
  //                   <a href="#">All Files</a>
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="extra-data-middle-right">
  //               {/* search input */}
  //               <input type="text" placeholder="Search"
  //               onChange={filterFiles}
  //               />
  //               <a href="#">Filter</a>
  //             </div>
  //           </div>
  //           <div
  //             className="extra-data-table"
  //             style={{
  //               boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
  //               border: "1px solid #e8e8e8",
  //               width: "1559px",
  //             }}
  //           >
  //             <table
  //               // add border to table and make header gray
  //               style={{
  //                 borderCollapse: "collapse",
  //                 backgroundColor: "#f8f8f8",
  //                 width: "100%",
  //                 textAlign: "center",
  //                 fontSize: "14px",
  //                 fontFamily: "Roboto, sans-serif",
  //                 fontWeight: "500",
  //                 color: "#333",
  //                 padding: "10px",
  //                 margin: "0",
  //                 borderRadius: "5px",
  //               }}
  //             >
  //               <thead>
  //                 <tr>
  //                   <th>Name</th>
  //                   <th>Email</th>
  //                   <th>Phone</th>
  //                   <th>Address</th>
  //                   <th>City</th>
  //                   <th>State</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 {filteredFiles.map((file, index) => {
  //                   return <FileList number={index} files={file} />;
  //                 })}
  //               </tbody>
  //             </table>
  //           </div>
  //         </div>

  //         {/* ant table with 6 columns */}

  //         <div
  //           className="button-bottom"
  //           style={{
  //             margin: "20px",
  //             padding: "20px",
  //           }}
  //         >
  //           <ButtonJsx
  //             name="Extract Datgggga"
  //             icon={<PlusOutlined />}
  //             background="#DB535B"
  //             box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
  //             border-radius="8px"
  //             borderColor="#E2E2EA"
  //             onClick={upload}

  //             // onClick={upload}
  //           />
  //           <ButtonJsx
  //             name="Download Extracted Data"
  //             icon={<PlusOutlined />}
  //             background="#DB535B"
  //             box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
  //             border-radius="8px"
  //             borderColor="#E2E2EA"
  //             onClick={downloadExtractData}

  //           />
  //           <ButtonJsx
  //             name="Extract Data"
  //             icon={<PlusOutlined />}
  //             background="#fff"
  //             color="#DB535B"
  //             box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
  //             border-radius="8px"
  //             borderColor="#E2E2EA"
  //           />
  //           {/* <DropFileInput /> */}
  //           {/* <input
  //             type="file"
  //             id="uploadHandle"
  //             style={{
  //               display: "none",
  //             }}
  //             // onChange={UploadFiles}
  //             onChange=
  //           /> */}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // const FileList = (props) => {
  //   const files = props.files || [];
  //   console.log('log', props);

  //   // const covertLastModifiedToDate =

  //   return (
  //     <>
  //       <tr>
  //         <td>{props.number + 1}</td>
  //         <td>{files["name"]}</td>
  //         <td>{files["size"]}</td>
  //         <td>{files["type"]}</td>
  //       </tr>
  //     </>
  //   );
}
