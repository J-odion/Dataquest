import React from 'react'
import "./ApproveFile.css"

const ApproveFileModal = ({open, onClose}) => {
  if (!open) return null;







  return (
    <div className="approve-overlay"
      onClick={onClose} 
    
    >
        <div className="approve-modal-container"
          onClick={
            (e) => {
              e.stopPropagation(); // to prevent the overlay from closing
            }
          }
        
        >
        <div className="pup-up-div">
        <div className="frame-div152">
          <div className="frame-div147">
            <div className="frame-div154">
              <div className="have-questions-schedule-a-dem">Text</div>
              <textarea className="frame-div155">
                  
                {/* <div className="frame-div81">
                  <div className="have-questions-schedule-a-dem">Item 1</div>
                  <div className="have-questions-schedule-a-dem">
                    Description 1
                  </div>
                </div> */}
              </textarea>
            </div>
          </div>
          <div>
              <textarea className="frame-div157">Column Label</textarea>
            {/* <textarea className="column-label-div">Column label</textarea> */}
            <img className="vector-icon4" alt="" src="vector4.svg" />
          </div>
          <div className="frame-div158">
            <img
              className="fluentdelete-24-filled-icon"
              alt=""
              src="fluentdelete24filled.svg"
            />
            <div className="frame-div147">
              <div className="frame-div147">
                <div className="frame-div147">
                  <div className="frame-div150">
                    {/* <div className="frame-div163"> */}
                      {/* <div className="frame-div91"> */}
                        <button className="save-div">Save</button>
                      {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="material-symbolscancel-rounde-icon"
          alt=""
          src="materialsymbolscancelrounded.svg"
        />
      </div>
        </div>
    </div>
  )
}

export default ApproveFileModal