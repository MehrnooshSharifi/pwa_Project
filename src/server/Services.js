const baseURL = "https://WSO2.gsafe.ir";
import Cookies from "js-cookie";
// Login| signUp USer
export async function Login(values) {
  let clientUserInfo = {
    id: values.id,
    phoneNumber: values.phoneNumber,
    userTypeId: values.userTypeId,
  };
  const url = baseURL + "/rose/gss/api/PWA/Login";
  console.log(url);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      //! "content-type": "application/json-patch+json",   this don't work for http and just work for https
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(clientUserInfo),
  });
  const data = await res.json();
  return data;
}
// GetUserInfo :
export async function GetUserInfo(nationalCode) {
  const url = baseURL + `/rose/gss/api/CoreUsers/GetUserInfo/${nationalCode}`;
  const res = await fetch(url, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
  });
  const data = await res.json();
  return data;
}
// GetToken :
export async function GetToken(values) {
  let userInfo = {
    userName: values.nationalCode,
    password: values.phoneNumber,
    email: values.email,
  };
  const url =
    baseURL + `/USR/api/v1/UserManagement/Users/UpdateUserEmailMobile`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const data = await res.json();
  return data;
}
