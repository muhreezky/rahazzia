import * as Yup from "yup";

const obj = Yup.object().shape({
  email: Yup.string().email("Masukkan e-mail yang benar").required("Kamu harus isi email"),
  username: Yup
    .string()
    .matches(/[a-z0-9._]/, { message: "Username hanya bisa mengandung huruf, angka, serta simbol . atau _" })
    .required("Kamu harus isi username anda"),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&_])[a-z\d$@$!%*?&_]{6,20}$/i, {
    message: "Password should contain alphanumerics and special char"
  }).required("Password harus diisi")
});

export default obj;