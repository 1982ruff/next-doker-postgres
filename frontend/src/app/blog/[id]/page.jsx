import BlogCard from "@/components/BlogPage/BlogCard";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  const product = await fetch(`http://localhost:3000/api/fullBlogs/${id}`).then(
    (res) => res.json()
  );
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: `Furnitura | ${product.title}`,
    openGraph: {
      images: [params.image, ...previousImages],
    },
  };
}

const getDetailBlogs = async (id) => {
  const res = await fetch(`http://localhost:3000/api/fullBlogs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const BlogDetailPage = async ({ params }) => {
  const blogSlug = await getDetailBlogs(params.id);

  return (
    <BlogCard
      image={blogSlug.image}
      title={blogSlug.title}
      date={blogSlug.date}
      category={blogSlug.category}
      description={blogSlug.description}
      likes={blogSlug.likes}
      comments={blogSlug.comments}
      id={blogSlug.id}
    />
  );
};

export default BlogDetailPage;
