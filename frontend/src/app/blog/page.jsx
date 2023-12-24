import BlogCard from "@/components/BlogPage/BlogCard";
import { FULL_BLOGS } from "@/data";

const BlogPage = () => {
  return (
    <>
      {FULL_BLOGS.map((item, idx) => (
        <BlogCard
          key={idx}
          image={item.image}
          title={item.title}
          date={item.date}
          category={item.category}
          description={item.description}
          likes={item.likes}
          comments={item.comments}
          link={item.link}
        />
      ))}
    </>
  );
};

export default BlogPage;
