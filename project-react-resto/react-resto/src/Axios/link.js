import axios from "axios";

const url = "http://localhost:8000/api";
let token = "PRziLj1wJWH9PGi9zKPcHXM0f3YFCc5OMkj1LWb5";

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
