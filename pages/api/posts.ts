import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_API_URL,
    key: process.env.CONTENT_API_KEY,
    version: "v3"
  });