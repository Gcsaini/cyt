import "whatwg-fetch";
import auth from "./auth";

function parseJSON(response) {
  return response.json ? response.json() : response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return parseJSON(response).then((responseFormatted) => {
    const error = new Error(response.statusText);
    error.response = response;
    error.response.payload = responseFormatted;
    throw error;
  });
}

function formatQueryParams(params) {
  return Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");
}

export default async function request(url, options = {}, stringify = true) {
  // Set headers
  if (stringify) {
    options.headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      options.headers,
      {}
    );
  }

  const token = auth.getToken();

  if (token) {
    options.headers = Object.assign(
      {
        Authorization: `Bearer ${token}`,
      },
      options.headers
    );
  }

  if (options && options.params) {
    const params = formatQueryParams(options.params);
    url = `${url}?${params}`;
  }

  // Stringify body object
  if (options && options.body && stringify) {
    options.body = JSON.stringify(options.body);
  }

  const response = await fetch(url, options);
  const response_1 = await checkStatus(response);
  return parseJSON(response_1);
}
