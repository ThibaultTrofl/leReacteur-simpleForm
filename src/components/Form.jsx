import Input from "./Input.jsx";

const Form = () => {
  // const[email, setEmail]= useState("");
  // const[password, setPassword]= useState("");
  // const[secondPassword, setsecondPassword]= useState("");

  return (
    <Input
      title={"Name"}
      data={firstName}
      setData={setFirstName}
      placeholder={"John Doe"}
      type={"text"}
    />
  );
};

export default Form;
