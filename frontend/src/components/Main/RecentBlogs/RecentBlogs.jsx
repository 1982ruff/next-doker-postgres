import H6 from "@/components/Headings/H6";
import P4 from "@/components/Paragraph/P4";
import Image from "next/image";
import Link from "next/link";

const RecentBlogs = ({ blogs }) => {
  return (
    <div className="grid grid-cols-3 gap-16 my-20 ">
      {blogs.map((item, idx) => (
        <BlogsCard
          key={idx}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default RecentBlogs;

const BlogsCard = ({ image, title, description, id }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-4">
      <div className="w-full h-full">
        <Image
          src={image}
          width={550}
          height={380}
          alt={title}
          className="object-contain w-full h-full"
        />
      </div>
      <H6>{title}</H6>
      <P4>{description}</P4>

      <Link
        href={`/blog/${id}`}
        className="text-xl text-Satoimo_Brown hover:underline underline-offset-8"
      >
        Read More
      </Link>
    </div>
  );
};
