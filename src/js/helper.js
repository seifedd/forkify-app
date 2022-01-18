import { TIMEOUT_SEC } from './config';

const timeout = function(s) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${Error.message} ${Error.status}
        `);
    }
    console.log('Test', data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
