import BlogFilter from "@/components/BlogPage/BlogFilter";
import Headinfo from "@/components/HeadInfo/Headinfo";
import React from "react";

export const metadata = {
  title: "Blog | Furnitura",
};

const getBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getFullBlog = async () => {
  const res = await fetch("http://localhost:3000/api/fullBlogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const BlogPage = async ({ children }) => {
  const blogs = await getBlogs();
  const fullBlogs = await getFullBlog();

  return (
    <section className="px-20">
      <Headinfo
        title={"Blogs"}
        description={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <div className="flex items-start justify-start gap-10 py-10 text-start ">
        <div className="basis-3/4"> {children}</div>
        <div className="basis-1/4">
          <BlogFilter fullBlogs={fullBlogs} blogs={blogs} />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
