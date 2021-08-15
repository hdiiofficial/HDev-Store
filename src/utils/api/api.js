const BASE_URL = `http://localhost:3000/api`;
const API_SIGNUP = `${BASE_URL}/owners`;
const API_SIGNIN = `${BASE_URL}`;

const SignInApi = async (email, password) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const res = await fetch(API_SIGNIN, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  return res;
};

const SignUpApi = async (name, phoneNumber, email, password) => {
  const res = await fetch(API_SIGNUP, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullname: name,
      email: email,
      phone: phoneNumber,
      house: '01',
      password: password,
      confirmPassword: password,
    }),
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
  return res;
};

module.exports = {
  SignInApi,
  SignUpApi,
};
