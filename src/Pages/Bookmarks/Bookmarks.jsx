import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../../utilities";
import Blog from "./../../Components/Blog/Blog";

const Bookmarks = () => {
  const [bookmark, setBookmark] = useState([]);

  const handleDelete = (id) => {
    deleteBlogs(id);
    const storedBlogs = getBlogs();
    setBookmark(storedBlogs);
  };

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBookmark(storedBlogs);
  }, []);

  return (
    <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white">
      {bookmark.map((card) => (
        <Blog
          handleDelete={handleDelete}
          deleteAble={true}
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
