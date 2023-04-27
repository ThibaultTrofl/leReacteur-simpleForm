import { useState } from "react";
import Input from "./Input.jsx";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setsecondPassword] = useState("");
  let tic = "";
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName) {
      tic = "fistname";
    } else if (!email) {
      tic = "email";
    } else if (!password) {
      tic = "password";
    } else if (password.length < 8) {
      tic = "passwordLength";
    } else if (password != secondPassword) {
      tic = "secondPassword";
    } else {
      tic = "ok";
    }

    onsubmit = handleSubmit;
  };

  return (
    <section className="container">
      <div className="all-input">
        <Input
          title={"Name"}
          data={firstName}
          setData={setFirstName}
          placeholder={"John Doe"}
          type={"text"}
          alert={tic === "firstname" ? "Please fill your firstname" : undefined}
        />
        <Input
          title={"Email"}
          data={email}
          setData={setEmail}
          placeholder={"john.doe@gmail.com"}
          type={"email"}
          alert={tic === "email" ? "Please fill your email" : undefined}
        />
        <Input
          title={"Password"}
          data={password}
          setData={setPassword}
          placeholder={"nuhpuP-7zekge-mexcus"}
          type={"password"}
          alert={tic === "password" ? "Please fill a password" : undefined}
        />
        <Input
          title={"Confirm the password"}
          data={secondPassword}
          setData={setsecondPassword}
          placeholder={"nuhpuP-7zekge-mexcuse"}
          type={"password"}
          alert={
            tic === "secondPassword"
              ? "Please fill the same password as above"
              : undefined
          }
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        {tic === "ok" ? <p>The account has been created</p> : null}
      </div>
    </section>
  );
};

export default Form;
