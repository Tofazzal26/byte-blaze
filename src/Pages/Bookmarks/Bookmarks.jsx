import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../../utilities";
import Blog from "./../../Components/Blog/Blog";
import NoState from "../../Components/NoState/NoState";

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

  if (bookmark.length < 1)
    return (
      <NoState
        address={"/blog"}
        message={"No Bookmarks Available"}
        label={"Go To Blogs"}
      />
    );

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
