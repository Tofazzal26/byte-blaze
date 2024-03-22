import { useLoaderData } from "react-router-dom";
import notFound from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
  const content = useLoaderData();
  const { id, cover_image, title, tags, body_html } = content;

  return (
    <div
      rel="noopener noreferrer"
      to={`/blog/${id}`}
      className=" mx-auto group hover:no-underline border p-2 focus:no-underline "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || notFound}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {tags.map((tag, ind) => (
          <a
            key={ind}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
