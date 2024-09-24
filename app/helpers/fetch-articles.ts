import config from "@/app/config";

const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    endpoint: "blogs",
  };
  const res = await fetch(`${config.api}/blogs`, reqOptions);
  const rtn = await res.json();
  console.log("🚀 ~ fetchBlogs ~ rtn:", rtn);

  return rtn;
};

export default fetchBlogs;
