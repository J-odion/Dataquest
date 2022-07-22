import React from 'react'

function TrainModal({open, onClose}) {
    if (!open) return null;
  return (
   <>
   <div className="training-overlay" onClick={onClose}>
       <div className="training-modal" 
       onClick={
            (e) => {
                e.stopPropagation(); // to prevent the overlay from closing
                }
       }
       >
       <div className="pup-up-div1">
        <div className="frame-div462">
          <div className="frame-div463">
            <div className="train-the-model-with-new-field">
              Train the model with new fields(s)?
            </div>
            <div className="you-have-added-some-new-field">
              You have added some new field(s). You will need to mark examples
              and train the model with the new field(s). Do you want to proceed?
            </div>
          </div>
        </div>
        <div className="frame-div464">
          <div className="frame-div465">
            <div className="frame-div466">
              <a style={{textDecoration:"none", color:"#000"}}
              onClick={onClose}
              className="back-div">Not Now</a>
            </div>
            <div className="frame-div467">
              <a style={{textDecoration:"none", color:"#000"}} className="back-div">Yes, Train Model</a>
              <img className="vector-icon33" alt="" src="vector33.svg" />
            </div>
          </div>
        </div>
        <img
          className="material-symbolscancel-rounde-icon1"
          alt=""
          src="materialsymbolscancelrounded.svg"
        />
      </div>
       </div>
   </div>
   </>
  )
}

export default TrainModal