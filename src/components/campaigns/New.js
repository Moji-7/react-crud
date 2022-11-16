import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const New = () => {
  let _campainModel = {
    id: uuidv4(),
    campaign: "",
    intro: "",
  };
  const [campainModel, setCampaignModel] = useState(_campainModel);

  const [campaignsAll, setCampaignAll] = useState([]);
  const [editing, setEditing] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //setCampaign(value);
    setCampaignModel({ ...campainModel, [name]: value });
  };
  const register = async (e) => {
  //  if (campaign !== "") {
      e.preventDefault();
      // campainModel.campaign = campaign;
      // campainModel.intro = intro;
      //campainModel=[campaign,intro]

      console.log(campainModel);
      setCampaignAll([...campaignsAll, campainModel]);
      await axios.post("http://localhost:4000/campaign", campainModel);
    // } 
    // else setErrorMsg("please fill all form inputs");
  };
  const selectedCampaign = (camp) => {
    setEditing(true)
    console.log("camp" + camp.id);
  };
  return (
    <>
      <div>New</div>
      <form onSubmit={register}>
        {/* <input onChange={(e) => setCampaign(e.target.value)}></input> */}
        <input name="campaign" onChange={(e) => handleInputChange(e)}></input>
        <input name="intro" onChange={(e) => handleInputChange(e)}></input>

        <button type="submit">new campaign</button>
      </form>
      <>
        <h2>salam</h2>
        <table>
          <thead>
            <tr>
              <th>campaign</th>
              <th>intro</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {campaignsAll.map((camp) => (
              <tr key={camp.id}>
                <td>{camp.campaign}</td>
                <td>{camp.intro}</td>
                <td>
                  <button onClick={selectedCampaign(camp)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default New;
