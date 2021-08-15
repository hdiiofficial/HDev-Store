const BASE_URL = `https://testprepaid.mobilepulsa.net/v1/`;
const md5 = require('md5');
const {saveDataPayment} = require('../firebase/firebase');
const API_KEY = '6235d5d1f2493ebc';
const USERNAME = '081281131113';

const providerList = [
  {
    tag: 'telkomsel',
    data: [
      '0811',
      '0812',
      '0813',
      '0821',
      '0822',
      '0823',
      '0852',
      '0853',
      '0851',
    ],
  },
  {
    tag: 'indosat',
    data: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
  },
  {
    tag: 'xl',
    data: ['0817', '0818', '0819', '0859', '0877', '0878'],
  },
  {tag: 'three', data: ['0895', '0896', '0897', '0898', '0899']},
  {tag: 'axis', data: ['0838', '0831', '0832', '0833']},
];

const getProvider = data => {
  let res;
  providerList.forEach(element => {
    element.data.forEach(el => {
      if (el === data.slice(0, 4)) {
        res = element.tag;
      }
    });
  });
  return res;
};

const apiIsiPulsa = async provider => {
  console.log(provider);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const res = await fetch(BASE_URL + 'legacy/index/pulsa/' + provider, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      commands: 'pricelist',
      username: USERNAME,
      sign: md5(USERNAME + API_KEY + 'pl'),
      status: 'active',
    }),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  const filter = res.data.sort(
    (a, b) => parseFloat(a.pulsa_price) - parseFloat(b.pulsa_price),
  );

  return filter;
};

const apiPaketData = async provider => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const res = await fetch(
    BASE_URL + `legacy/index/data/${provider}_paket_internet`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        commands: 'pricelist',
        username: USERNAME,
        sign: md5(USERNAME + API_KEY + 'pl'),
        status: 'active',
      }),
    },
  )
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  const filter = res.data.sort(
    (a, b) => parseFloat(a.pulsa_price) - parseFloat(b.pulsa_price),
  );

  return filter;
};
const apiIsiPln = async provider => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const res = await fetch(BASE_URL + `legacy/index/pln/${provider}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      commands: 'pricelist',
      username: USERNAME,
      sign: md5(USERNAME + API_KEY + 'pl'),
      status: 'active',
    }),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  const filter = res.data.sort(
    (a, b) => parseFloat(a.pulsa_price) - parseFloat(b.pulsa_price),
  );

  return filter;
};
const apiIsiPulsaPost = async (phone, pulsa_code) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const refid = new Date().getTime();
  const res = await fetch(BASE_URL + 'legacy/index', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      commands: 'topup',
      username: USERNAME,
      ref_id: refid.toString(),
      hp: phone,
      pulsa_code: pulsa_code,
      sign: md5(USERNAME + API_KEY + refid),
    }),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  await saveDataPayment(res);

  return res;
};
const dataEtoll = async provider => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const res = await fetch(BASE_URL + `legacy/index/etoll/${provider}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      commands: 'pricelist',
      username: USERNAME,
      sign: md5(USERNAME + API_KEY + 'pl'),
      status: 'active',
    }),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  const filter = res.data.sort(
    (a, b) => parseFloat(a.pulsa_price) - parseFloat(b.pulsa_price),
  );

  return filter;
};
const apiIsiEtollPost = async (phone, pulsa_code) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const refid = new Date().getTime();
  const res = await fetch(BASE_URL + 'legacy/index', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      commands: 'topup',
      username: USERNAME,
      ref_id: refid.toString(),
      hp: phone,
      pulsa_code: pulsa_code,
      sign: md5(USERNAME + API_KEY + refid),
    }),
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      throw err;
    });
  await saveDataPayment(res);

  return res;
};
module.exports = {
  apiIsiPulsa,
  getProvider,
  apiIsiPulsaPost,
  apiPaketData,
  dataEtoll,
  apiIsiPln,
  apiIsiEtollPost,
};
