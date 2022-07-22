import { Button, Spin, Upload } from "antd";
import {
  GoogleOutlined,
  UploadOutlined,
  PlusOutlined,
  DownloadOutlined,
  CloudDownloadOutlined,
  ArrowRightOutlined,
  CloudUploadOutlined,
  GooglePlusCircleFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import React, { useRef, useState } from "react";
import ButtonJsx from "./Button";

export default function DrapDrop({open, onClose}) {
  // const inputRef = useRef([]);
  // const [fileList, setFileList] = useState([]);
  const onChange = (info) => {
    console.log("change", info);
    // console.log(info.file.originFileObj, 'hjwkbjhb');
    const uploadhandler = new FormData();
    uploadhandler.append("file", info.file.originFileObj);
    fetch("https://datacreds.herokuapp.com/uploads", {
      method: "POST",
      mode : "cors",
      

      body: uploadhandler,

    }).then((res) => {
      console.log(res);
    })

  };
  const onDrop = (info) => {
    console.log("drop", info);
  };
  if (!open) return null;
  return (
    <>
     <div className="overlay" onClick={onClose}>
       <div className="modal-container" onClick={
          (e) => {
            e.stopPropagation(); // to prevent the overlay from closing
          }
       }>
       <div className="drag-menu-item">
        <div className="drag-menu-item-title">
          <h3>Import Files</h3>
          <h4>Excel (.xlsx) and CSV (.csv) files are allowed</h4>
        </div>
        <Upload
          className="drag-menu-upload"
          multiple={true}
          listType="picture"
          showUploadList={{ showRemoveIcon: true }}
          accept=".pdf"
          onChange={onChange}
          onDrop={onDrop}
          beforeUpload={(file) => {
            console.log({ file });
            return true;
          }}
          iconRender={() => {
            return <Spin></Spin>;
          }}
          // itemRender={(existingComp, file) => {
          //   return <p>{file.name}</p>
          // }}
          progress={{
            strokeWidth: 3,
            strokeColor: {
              "0%": "#108ee9",
              "100%": "#87d068",
            },
            style: { top: 12 },
          }}
        >
          <CloudUploadOutlined
            style={{
              fontSize: "6rem",
              margin: "0 auto",
              display: "block",
              fontWeight: "100",
              color: "grey",
            }}
          />

          <p
            style={{
              display: "inline",
            }}
          >
            Drag & drop files here or click{" "}
          </p>
          <Button
            style={{
              display: "inline",
              border: "none",
              background: "transparent",
              color: "red",
            }}
          >
            Upload
          </Button>
        </Upload>

        <div className="other-icons">
          <div
            className="other-icons-title"
            style={{
              marginLeft: "30px",
              fontSize: "1rem",
              marginTop: "20px",
            }}
          >
            <p>Auto import workflows</p>
          </div>
          <div className="card-row">
            <div className="card">
              <ButtonJsx icon={<GooglePlusCircleFilled />} />
              {/* forward arrow icon */}
              <ArrowRightOutlined />
            </div>
            <div className="card">
              <ButtonJsx icon={<GoogleOutlined />} />
              {/* forward arrow icon */}
              <ArrowRightOutlined />
            </div>
            <div className="card">
              <ButtonJsx icon={<GoogleOutlined />} />
              {/* forward arrow icon */}
              <ArrowRightOutlined />
            </div>
            <div className="card">
              <ButtonJsx icon={<GoogleOutlined />} />
              {/* forward arrow icon */}
              <ArrowRightOutlined />
            </div>
            <div className="card">
              <ButtonJsx icon={<GoogleOutlined />} />
              {/* forward arrow icon */}
              <ArrowRightOutlined />
            </div>
            <div className="card">
              <ButtonJsx icon={<GoogleOutlined />} />
              {/* forward arrow icon */}
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>         

       </div>
     </div>
    </>
  );
}
