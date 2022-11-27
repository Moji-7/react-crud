import React, { useState } from "react";
import './registerUser.css'
export const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [passwordConfirm, setPasswordConforim] = useState("");
  ///all status
  const [emailStatus, setEmailStatus] = useState(false);
  const [passwordStatus, setPaswordStatus] = useState(false);
  const [passwordConfirmStatus, setPasswordConforimStatus] = useState(false);
  //all message
  const [emailMessage, setEmailMessage] = useState("email must have one @");
  const [passwordMessage, setPaswordMessage] = useState(
    "password lenght must be 8"
  );
  const [passwordConfirmMessage, setPasswordConforimMessage] = useState(
    "password conforim must be same as password"
  );
  //result
  const [resultMesage, setResultMessage] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") validateEmail(value);
    if (name === "password") validatePassword(value);
    if (name === "passwordConfirm") validatePasswordConform(value);
  };

  const validateEmail = (value) => {
    setEmail(value);
    if (value.indexOf("@") > 1) {
      setEmailStatus(true);
      setEmailMessage(true);
    } else {
      setEmailStatus(false);
      setEmailMessage("email must have one @");
    }
  };
  const validatePassword = (value) => {
    setPasword(value);
  };
  const validatePasswordConform = (value) => {
    setPasswordConforim(value);
  };

  // on submit clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailStatus && passwordStatus && passwordConfirmStatus)
      setResultMessage("Great uoy fill all correctelly!");
    else setResultMessage("you have error, read them...");
  };
  /////////////////////////////////////////////
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>email</label>
        <input name="email" value={email} onChange={(e) => handleInput(e)} />
        <br />
        <label>password</label>
        {/* <input
          name="password"
          value={password}
          onChange={(e) => handleInput(e)}
        />
        <br />
        <label>password conforim</label>
        <input
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => handleInput(e)}
        /> */}
        <button>submit</button>
      </form>
      <hr />
      <div className={emailStatus == true ? "success" : "error"}>
        email value:{email}
        <br />
        <span>
          {" "}
          email message:{emailMessage} status:{emailStatus}{" "}
        </span>
        <br />
      </div>
      {/* <hr />
      password:{password}
      <hr />
      password conforim:{passwordConfirm}
      <hr />
      total status:{resultMesage} */}
    </>
  );
};
