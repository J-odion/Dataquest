import "./ManageField.css";

import React, { useState } from "react";
import TrainModal from "./TrainModal";
const ManageFields = () => {

    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="manage-fields">
        <div className="manage-fields__header">
          <a href="#" className="btn-gray">
            Back
          </a>
          <h2>Manage Fields and Table Headers</h2>
          <div></div>
        </div>
        <div className="manage-fields__body">
          <div className="manage-fields__body__header">
            <div className="fields">
              <div className="fields45-div">Fields(45)</div>
              <div className="line-div4" />
            </div>
            <div className="manage-fields-table-header">
              <div className="table-headers-3">Table headers (3)</div>
            </div>
          </div>
          <div className="manage-fields__table-items">
            <div className="manage-fields__body__left">
              <div className="inner-left-manage-fields">
                <div className="manage-fields__body__left_left-icons">icon</div>
                <div className="manage-fields-left__body-text">
                  <span>Tax</span>
                  <i>mark</i>
                </div>
              </div>
              <div className="inner-left-manage-fields">
                <div className="manage-fields__body__left_left-icons">icon</div>
                <div className="manage-fields-left__body-text">
                  <span>Tax</span>
                  <i>mark</i>
                </div>
              </div>
              <div className="inner-left-manage-fields">
                <div className="manage-fields__body__left_left-icons">icon</div>
                <div className="manage-fields-left__body-text">
                  <span>Tax</span>
                  <i>mark</i>
                </div>
              </div>
              <div className="inner-left-manage-fields">
                <div className="manage-fields__body__left_left-icons">icon</div>
                <div className="manage-fields-left__body-text">
                  <span>Tax</span>
                  <i>mark</i>
                </div>
              </div>
              <div className="inner-left-manage-fields">
                <div className="manage-fields__body__left_left-icons">icon</div>
                <div className="manage-fields-left__body-text">
                  <span>Tax</span>
                  <i>mark</i>
                </div>
              </div>
              <div className="inner-left-manage-fields">
                <div className="manage-fields__body__left_left-icons">icon</div>
                <div className="manage-fields-left__body-text">
                  <span>Tax</span>
                  <i>mark</i>
                </div>
              </div>
            </div>
            <div className="manage-fields__body__right">
              <div className="inner-right-manage-fields">
                <div className="manage-fields-right__body-text">
                  <span>Add Formatting</span>
                  <i>mark</i>
                </div>
                <div className="manage-fields__body__right_right-icons">
                  icon
                </div>
              </div>
              <div className="inner-right-manage-fields">
                <div className="manage-fields-right__body-text">
                  <span>Add Formatting</span>
                  <i>mark</i>
                </div>
                <div className="manage-fields__body__right_right-icons">
                  icon
                </div>
              </div>
              <div className="inner-right-manage-fields">
                <div className="manage-fields-right__body-text">
                  <span>Add Formatting</span>
                  <i>mark</i>
                </div>
                <div className="manage-fields__body__right_right-icons">
                  icon
                </div>
              </div>
              <div className="inner-right-manage-fields">
                <div className="manage-fields-right__body-text">
                  <span>Add Formatting</span>
                  <i>mark</i>
                </div>
                <div className="manage-fields__body__right_right-icons">
                  icon
                </div>
              </div>
              <div className="inner-right-manage-fields">
                <div className="manage-fields-right__body-text">
                  <span>Add Formatting</span>
                  <i>mark</i>
                </div>
                <div className="manage-fields__body__right_right-icons">
                  icon
                </div>
              </div>
              <div className="inner-right-manage-fields">
                <div className="manage-fields-right__body-text">
                  <span>Add Formatting</span>
                  <i>mark</i>
                </div>
                <div className="manage-fields__body__right_right-icons">
                  icon
                </div>
              </div>
            </div>
          </div>
          <div className="done-btn">
            <button
            onClick={() => setOpenModal(true)}
            >Done</button>
        </div>
        </div>
       
      </div>

     <TrainModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default ManageFields;
