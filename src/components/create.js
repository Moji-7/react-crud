import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, SetPassword] = useState("");
  const [userName, SetUserName] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  
  const postData = () => {
    console.log(firstName);
    axios.post("https://localhost:7124/Login/Register", {
      firstName,
      lastName,
      userName,
      password,
    });
  };
  const { state } = useLocation();
  return (
    
    <Form className="create-form" onSubmit={postData}>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>choose user name</label>
        <input
          placeholder="choose user name"
          onChange={(e) => SetUserName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>choose password</label>
        <input
          placeholder="choose Password"
          onChange={(e) => SetPassword(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckBox(e.target.value)}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
      <div>{state.userName}</div>
    </Form>
  );
};

export default Create;
