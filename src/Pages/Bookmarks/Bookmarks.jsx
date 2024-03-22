import { useEffect, useState } from "react";
import { getBlogs } from "../../utilities";
import Blog from "./../../Components/Blog/Blog";

const Bookmarks = () => {
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    setBookmark(getBlogs);
  }, []);

  return (
    <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white">
      {bookmark.map((card) => (
        <Blog deleteAble={true} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Bookmarks;
