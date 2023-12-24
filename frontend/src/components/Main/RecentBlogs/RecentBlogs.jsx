import H6 from "@/components/Headings/H6";
import P4 from "@/components/Paragraph/P4";
import { BLOGS } from "@/data";
import Image from "next/image";
import Link from "next/link";

const RecentBlogs = () => {
  return (
    <div className="grid gap-16 my-20 grid-cols-3 ">
      {BLOGS.map((item, idx) => (
        <BlogsCard
          key={idx}
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

const BlogsCard = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col gap-y-4 justify-start items-start">
      <Image src={image} alt={title} />
      <H6>{title}</H6>
      <P4>{description}</P4>

      <Link
        href={link}
        className="text-xl text-Satoimo_Brown hover:underline underline-offset-8"
      >
        Read More
      </Link>
    </div>
  );
};
