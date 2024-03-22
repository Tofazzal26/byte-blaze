import { NavLink } from "react-router-dom";
import notFound from "../../assets/404.jpg";
const Blog = ({ card, deleteAble }) => {
  const { id, cover_image, title, description, created_at } = card;

  return (
    <div className="flex relative">
      <NavLink
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline transition hover:scale-105 focus:no-underline bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || notFound}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(card.created_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </NavLink>
      {deleteAble && <div>Delete</div>}
    </div>
  );
};

export default Blog;
