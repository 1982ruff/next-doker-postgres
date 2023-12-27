import H5 from "../Headings/H5";
import Image from "next/image";
import P3 from "../Paragraph/P3";
import AccordionProvider from "../Providers/AccordionProvider";

const categories = [
  {
    title: "Cupboards",
    quantity: 4,
  },
  {
    title: "Coffee Table",
    quantity: 10,
  },
  {
    title: "Bar Stool",
    quantity: 3,
  },
  {
    title: "Kitchen Furniture",
    quantity: 7,
  },
  {
    title: "Office Chair",
    quantity: 11,
  },
  {
    title: "Cabinets",
    quantity: 2,
  },
];

const tags = ["Kitchen", "Decorative"];

const BlogFilter = ({ blogs, fullBlogs }) => {
  return (
    <aside className="flex flex-col justify-center w-full gap-10">
      <div className="flex items-center justify-between px-10 py-4 rounded-lg bg-Lynx_White">
        <input
          type="text"
          name=""
          id=""
          className="px-2 py-2 text-xl bg-Lynx_White focus:outline-none"
          placeholder="Search..."
        />
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0923 3.44608C9.06886 3.44947 7.12927 4.25425 5.69848 5.6841C4.26769 7.11395 3.46238 9.05227 3.45898 11.0744C3.46068 13.0982 4.26503 15.0388 5.69582 16.4711C7.12661 17.9033 9.06716 18.7104 11.0923 18.7155C12.8884 18.7155 14.5433 18.0841 15.8519 17.0392L19.0303 20.2155C19.1913 20.3652 19.4041 20.4466 19.6239 20.4427C19.8438 20.4389 20.0536 20.3501 20.2092 20.1949C20.3649 20.0397 20.4544 19.8303 20.4588 19.6106C20.4632 19.391 20.3823 19.1781 20.233 19.0168L17.0546 15.8373C18.1402 14.4881 18.732 12.8088 18.732 11.0776C18.732 6.8724 15.3003 3.44608 11.0923 3.44608ZM11.0923 5.14482C14.383 5.14482 17.0322 7.78908 17.0322 11.0744C17.0322 14.3597 14.383 17.02 11.0923 17.02C7.80164 17.02 5.15563 14.3693 5.15563 11.0808C5.15563 7.79229 7.80164 5.14482 11.0923 5.14482Z"
              fill="#222222"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 my-6">
        <H5>{fullBlogs[0].title}</H5>
        <Image width={300} height={150} src={fullBlogs[0].image} alt="" />

        <P3>{fullBlogs[0].description}</P3>
      </div>

      {/* Recent Posts */}
      <AccordionProvider title={"Recent Posts"}>
        <ul className="">
          {blogs.map((item, idx) => (
            <li key={idx} className="mt-4">
              <P3>{item.title}</P3>
            </li>
          ))}
        </ul>
      </AccordionProvider>

      {/* Categories */}
      <AccordionProvider title={"Categories"}>
        <ul className="">
          {categories.map((item, idx) => (
            <li key={idx} className="mt-4">
              <P3>
                {item.title} ({item.quantity})
              </P3>
            </li>
          ))}
        </ul>
      </AccordionProvider>

      {/* Tags */}
      <AccordionProvider title={"Tags"}>
        <ul className="flex gap-4">
          {tags.map((item, idx) => (
            <li key={idx} className="mt-4">
              <P3>{item}</P3>
            </li>
          ))}
        </ul>
      </AccordionProvider>
    </aside>
  );
};

export default BlogFilter;
