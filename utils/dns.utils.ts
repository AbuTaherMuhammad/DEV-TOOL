import dns from "node:dns";

interface TypeA {
  url: string;
  cb: () => void;
}

export const getA = (url: string) => {
  return dns.resolve4(url, (err,addr) => {});
};

// export const getAAAA = (url) => {};

// export const getMx = (url) => {};

// export const getMx = (url) => {};
