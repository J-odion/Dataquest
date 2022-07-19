import React from "react";
import "./GetStarted.css";
import GetStartedData from "./GetStartedData";

export default function GetStarted(props) {
  return (
    <>
     <div className="get-started-div">
     <div className="frame-div166">
        <div className="pharmacovigilance-div">Pharmacovigilance</div>
        <div className="frame-div167">
          <div className="frame-div168">
            <div className="frame-div169">
              <div className="frame-div170">
                <div className="cases-div">Create Your Own</div>
                <div className="div18">Build your own extractor</div>
              </div>
              <div className="icon-div">
                <div className="frame-div171">
                  <img className="frame-icon1" alt="" src="frame-7382.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div172">
              <div className="frame-div170">
                <GetStartedData
                  item_name="CIOMS I"
                  item_description="Pre-built extractor"
                />
              </div>
              <div className="icon-div">
                <div className="frame-div174">
                  <img className="frame-icon2" alt="" src="frame-73821.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div175">
              <div className="frame-div170">
                <GetStartedData
                  item_name="CIOMS II"
                  item_description="Pre-built extractor"
                />
              </div>
              <div className="icon-div">
                <div className="frame-div177">
                  <img className="frame-icon3" alt="" src="frame-73822.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div178">
              <div className="frame-div170">
                <GetStartedData
                  item_name="MedWatch Form"
                  item_description="Pre-built extractor"
                />
              </div>
              <div className="icon-div">
                <div className="frame-div171">
                  <img className="frame-icon4" alt="" src="frame-73823.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div168">
              <div className="frame-div182">
                <div className="frame-div170">
                  <GetStartedData
                    item_name="AER Form"
                    item_description="Pre-built extractor"
                  />
                </div>
                <div className="icon-div">
                  <div className="frame-div184">
                    <img className="frame-icon5" alt="" src="frame-73824.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div166">
        <div className="pharmacovigilance-div">Finance</div>
        <div className="frame-div167">
          <div className="frame-div168">
            <div className="frame-div169">
              <div className="frame-div170">
                <div className="cases-div">Create Your Own</div>
                <div className="div18">Build your own extractor</div>
              </div>
              <div className="icon-div">
                <div className="frame-div171">
                  <img className="frame-icon1" alt="" src="frame-73826.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div195">
              <div className="frame-div170">
                <GetStartedData
                  item_name="Invoices"
                  item_description="Pre-built extractor"
                />
              </div>
              <div className="icon-div">
                <div className="frame-div197">
                  <img className="frame-icon8" alt="" src="frame-73827.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div198">
              <div className="frame-div170">
                <GetStartedData
                  item_name="Receipts"
                  item_description="Pre-built extractor"
                />
              </div>
              <div className="icon-div">
                <div className="frame-div200">
                  <img className="frame-icon9" alt="" src="frame-73828.svg" />
                </div>
              </div>
            </div>
            <div className="frame-div168">
              <div className="frame-div202">
                <div className="frame-div170">
                  <GetStartedData
                    item_name="Purchase Orders"
                    item_description="Pre-built extractor"
                  />
                </div>
                <div className="icon-div">
                  <div className="frame-div204">
                    <img
                      className="frame-icon10"
                      alt=""
                      src="frame-73829.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
