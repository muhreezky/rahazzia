import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Masukkan e-mail valid").required("E-mail harus diisi"),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{6,20}$/i, {
    message: "Password harus berisi huruf, angka, dan simbol"
  }).required("Password harus diisi")
})

export default loginSchema;
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{minlength,maxlength}$/