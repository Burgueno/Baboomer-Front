import 'whatwg-fetch';
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then((json) => ({
    json,
    throwError: true,
  }));
}

function checkException(response) {
  if (response.throwError === true) {
    throw response.json;
  }
  return response;
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(checkException)
    .then(parseJSON);
}
