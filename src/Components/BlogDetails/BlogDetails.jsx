import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogDetail = useLoaderData();

  return (
    <div>
      <h2>{blogDetail.title}</h2>
    </div>
  );
};

export default BlogDetails;
