import { DownloadOutlined, ReloadOutlined, ShareAltOutlined } from "@ant-design/icons";
import React from "react";
import ButtonJsx from "./ExtractData/Button";

export default function Invoice() {
  return (
    <>
      <div className="invoice">
        <div className="invoice-header">
          <div className="invoice-header-left">
            <p>All files</p>
            <p>Add new files</p>
          </div>
          <div className="invoice-header-middle">
            <p>888 pages remaining for this month</p>
          </div>
          <div className="invoice-header-right">
            <p>have any question?</p>
          </div>
        </div>
        <div className="invoice-body">
          <div className="invoice-body-left">
            <div className="invoice-body-left-header">
              <p>Logo</p>
              <h2>Your Compnay name</h2>
            </div>
            <div className="invoice-body-left-body">
              <div className="invoice-body-left-body-left">
                <div className="form-control">
                  <label>Your Phone:</label>
                  <input type="tel" placeholder="(999)9999" />
                </div>
                <div className="form-control">
                  <label>Your Email Address:</label>
                  <input type="email" />
                </div>
                <div className="form-control">
                  <label>Your Street Address:</label>
                  <input type="text" />
                </div>
                <div className="form-control">
                  <label>Your City:</label>
                  <input type="text" />
                </div>
              </div>
              <div className="invoice-body-left-body-right">
                <table
                  border={1}
                  borderColor="#e8e8e8"
                  // add border to table and make header gray
                  style={{
                    width: "30%",
                    textAlign: "center",
                    fontSize: "14px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  <thead>
                    <tr>
                      <th>#Invoice</th>
                      <th>#001</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Date</td>
                      <td>01/01/2020</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>01/05/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="invoice-body-left-middle">
              <table
                border={1}
                borderColor="gray"
                // add border to table and make header gray
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "14px",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "500",
                  color: "#333",
                  marginTop: "20px",
                }}
              >
                <thead
                  style={{
                    textAlign: "left",
                    background: "#D3D3D3",
                    color: "#000",
                    fontWeight: "lighter",
                  }}
                >
                  <tr>
                    <th>Bill To:</th>
                    <th>Ship To:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer Name</td>
                    <td>Customer Name</td>
                  </tr>
                  <tr>
                    <td>Customer Email</td>
                    <td>Shipping Address</td>
                  </tr>
                  <tr>
                    <td>Billing Address</td>
                    <td>Shipping Address</td>
                  </tr>
                </tbody>
              </table>

              <table
                border={1}
                borderColor="gray"
                // add border to table and make header gray
                style={{
                  width: "700px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "500",
                  color: "#333",
                  marginTop: "20px",
                }}
              >
                <thead
                  style={{
                    textAlign: "left",
                    background: "#D3D3D3",
                    color: "#000",
                    fontWeight: "lighter",
                  }}
                >
                  <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer Name</td>
                    <td>1</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>Customer Email</td>
                    <td>1</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>Billing Address</td>
                    <td>1</td>
                    <td>$100</td>
                    <td>$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice-body-right">
            <div className="invoice-body-right-header">
              <p>1/23 sample_template.jpg</p>
              <div className="invoice-body-right-header-button">
              <ButtonJsx
            name=""
            icon={<DownloadOutlined rotate={180}/>}
            background="#DB535B"
            box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
            border-radius="8px"
            borderColor="#E2E2EA"
          />
           <ButtonJsx
            name=""
            icon={<ReloadOutlined />}
            background="#DB535B"
            box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
            border-radius="8px"
            borderColor="#E2E2EA"
          />
           <ButtonJsx
            name="Share"
            icon={<ShareAltOutlined />}
            background="#DB535B"
            box-shadow="0px 6px 30px rgba(84, 111, 255, 0.16)"
            border-radius="8px"
            borderColor="#E2E2EA"
          />
              </div>
            </div>
            <div className="invoice-body-right-body">
             <div className="table-one">
               <div className="list-view">
                 <ul>
                   <li>
                     List View
                     <hr />
                   </li>
                    <li>
                      Json
                      <hr />
                    </li>
                 </ul>
               </div>
             <div className="table-header-design">
                <p>label</p>
                <p>hide</p>
              </div>
            <table
                border={1}
                style={{
                  width:"100%"
                }}
                
                
              >
                <tbody>
                  <tr>
                    <td className="table-td-1"><div className="table-line"></div>Invoice</td>
                    <td className="table-td-2">1</td>
                    <td className="table-td-3">$100</td>
        
                  </tr>
                  <tr>
                    <td className="table-td-1"><div className="table-line"></div>Invoice</td>
                    <td className="table-td-2">1</td>
                    <td className="table-td-3">$100</td>
        
                  </tr>
                  <tr>
                    <td className="table-td-1"><div className="table-line"></div>Invoice</td>
                    <td className="table-td-2">1</td>
                    <td className="table-td-3">$100</td>
        
                  </tr>

                </tbody>
              </table>
             </div>
                  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
