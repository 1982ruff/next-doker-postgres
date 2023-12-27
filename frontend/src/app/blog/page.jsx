import BlogCard from "@/components/BlogPage/BlogCard";

const getFullBlog = async () => {
  const res = await fetch("http://localhost:3000/api/fullBlogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const BlogPage = async () => {
  const fullBlogs = await getFullBlog();

  return (
    <>
      {fullBlogs?.map((item, idx) => (
        <BlogCard
          key={idx}
          image={item.image}
          title={item.title}
          date={item.date}
          category={item.category}
          description={item.description}
          likes={item.likes}
          comments={item.comments}
          id={item.id}
        />
      ))}
    </>
  );
};

export default BlogPage;
