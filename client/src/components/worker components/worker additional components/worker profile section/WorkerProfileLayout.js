import React, { useState } from "react";
import "../../../../styles/global/worker global/WorkerProfileDynamicInputFieldStyle.css";
import WorkerProfileActionButton from "./WorkerProfileActionButton";
import WorkerProfileFormSideImage from "./WorkerProfileFormSideImage";
import WorkerProfileHeaderImage from "./WorkerProfileHeaderImage";
import WorkerProfileHeadline from "./WorkerProfileHeadline";
import WorkerProfileSelectInput from "./WorkerProfileSelectInput";
import WorkerProfileTextAreaInput from "./WorkerProfileTextAreaInput";
import WorkerProfileTextInput from "./WorkerProfileTextInput";
import WorkerProfileWorkExperienceDurationInput from "./WorkerProfileWorkExperienceDurationInput";
export default function WorkerProfileLayout() {
  const [workExperienceList, setWorkExperienceList] = useState([
    { experienceList: "" },
  ]);

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...workExperienceList];
    list[index][name] = value;
    setWorkExperienceList(list);
  };

  const handleExperienceRemove = (index) => {
    const list = [...workExperienceList];
    list.splice(index, 1);
    setWorkExperienceList(list);
  };

  const handleExperienceAdd = () => {
    setWorkExperienceList([...workExperienceList, { experienceList: "" }]);
  };

  return (
    <>
      <WorkerProfileHeaderImage />
      <div className="container bootstrap snippet mt-lg-1 text-black-50">
        <div className="row mt-5">
          <WorkerProfileHeadline profileHeadlineText="Set up your Profile" />
          <div className="col-sm-2"></div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <WorkerProfileFormSideImage />
          </div>
          <div className="col-sm-9">
            <div className="" id="messages">
              {/* <h2></h2> */}

              <hr />

              <form class="row g-3 " action="post">
                <WorkerProfileTextInput
                  labelFor="username"
                  labelName="Username"
                  textInputType="text"
                  inputName="username"
                  value=""
                  placeholder="Username..."
                />
                <WorkerProfileTextInput
                  labelFor="email"
                  labelName="Email"
                  textInputType="email"
                  inputName="email"
                  value=""
                  placeholder="Email..."
                />
                <WorkerProfileTextInput
                  labelFor="phoneNumber"
                  labelName="Phone Number"
                  textInputType="text"
                  inputName="phoneNumber"
                  value=""
                  placeholder="Phone Number..."
                />
                <WorkerProfileTextInput
                  labelFor="workerType"
                  labelName="Worker Genre"
                  textInputType="text"
                  inputName="workerType"
                  value=""
                  placeholder="Worker Type..."
                />
                <WorkerProfileSelectInput
                  labelFor="phone"
                  labelName="Select Working Area"
                  selectNamesFetchedFromDatabase="Uttara"
                />
                <WorkerProfileSelectInput
                  labelFor="workingShift"
                  labelName="Select Working Shift"
                  selectNamesFetchedFromDatabase="Day"
                />

                <h5>Your Work Experience</h5>
                {workExperienceList.map((singleService, index) => (
                  <div key={index} className="services">
                    <div className="first-division">
                      <label>Company name : </label>
                      <input
                        name="experienceList"
                        type="text"
                        id="service"
                        value={singleService.experienceList}
                        onChange={(e) => handleExperienceChange(e, index)}
                        required
                      />
                      {/* <label>Duration : </label> */}
                      <div className="row mt-3">
                        <WorkerProfileWorkExperienceDurationInput
                          labelName="Check In"
                          inputName="startDate"
                          inputType="date"
                          // value="startDate"
                          minDateInCalender="2001-01-01"
                          maxDateInCalender="2050-01-01"
                        />
                        <WorkerProfileWorkExperienceDurationInput
                          labelName="Check Out"
                          inputName="endDate"
                          // value="endDate"
                          inputType="date"
                          minDateInCalender="2001-01-01"
                          maxDateInCalender="2050-01-01"
                        />
                      </div>

                      {workExperienceList.length - 1 === index &&
                        workExperienceList.length < 5 && (
                          <button
                            type="button"
                            onClick={handleExperienceAdd}
                            className="add-btn"
                          >
                            {/* <span>Add New Experience</span> */}
                            <span>
                              <i className="fa fa-plus"></i>
                            </span>
                          </button>
                        )}
                    </div>
                    <div className="second-division">
                      {workExperienceList.length !== 1 && (
                        <button
                          type="button"
                          onClick={() => handleExperienceRemove(index)}
                          className="remove-btn"
                        >
                          {/* <span>Remove</span> */}
                          <span>
                            <i className="fa fa-minus"></i>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <WorkerProfileTextAreaInput
                  labelFor="address"
                  labelName="Address"
                  textInputRow="3"
                  inputName="address"
                  value=""
                  placeholder="Your Address..."
                />
                <WorkerProfileActionButton
                  buttonType="submit"
                  workerProfileActionButtonIcon="fa fa-wrench"
                  workerProfileActionButtonText="Save "
                />
              </form>
              <div className="mt-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
