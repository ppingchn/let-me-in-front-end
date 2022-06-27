import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PagePostsElement from "./PagePostsElement";
import { useRef } from "react";

export default function PagePosts({ setMenuSelect }) {
  const scrollEl = useRef(null);
  console.log(scrollEl);

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Page posts</h1>
        <div className="flex gap-2">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer transition-all"
            onClick={() =>
              document.getElementById("allpost").scrollBy({
                left: -200,
                behavior: "smooth",
              })
            }
          >
            <MdKeyboardArrowLeft className="text-2xl" />
          </div>
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer transition-all"
            onClick={() =>
              document.getElementById("allpost").scrollBy({
                left: 200,
                behavior: "smooth",
              })
            }
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 items-center px-5 py-3 overflow-x-auto"
        id="allpost"
      >
        <PagePostsElement />
        <PagePostsElement />
        <PagePostsElement />
      </div>
      <div className="flex flex-col w-full">
        {/* if experience more than six Showmore appear */}
        <button
          className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray"
          onClick={() => setMenuSelect("Posts")}
        >
          See all posts
        </button>
      </div>
    </div>
  );
}
