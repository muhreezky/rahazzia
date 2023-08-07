import * as Yup from "yup";

const obj = Yup.object().shape({
  email: Yup.string().email("Email is Invalid"),
  username: Yup.string().matches(/[a-z0-9]/, { message: "Username Should be Alphanumeric" }),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&_])[a-z\d$@$!%*?&_]{6,20}$/i, {
    message: "Password should contain alphanumerics and special char"
  })
});

export default obj;