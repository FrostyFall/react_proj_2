import { getItem } from "../local-storage";

const client = {
  get: async (url: string) => {
    const jwtToken = getItem("token");

    let options: any;
    if (jwtToken) {
      options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
    } else {
      options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      };
    }

    const res = await fetch(url, options);

    return res;
  },
  post: async (url: string, body: any) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return res;
  },
  put: async (url: string, body: any) => {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return res;
  },
};

export default client;
