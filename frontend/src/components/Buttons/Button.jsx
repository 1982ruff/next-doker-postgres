import Link from "next/link";

const Button = ({ children, link }) => {
  return (
    <button className="text-xl w-fit hover:bg-Satoimo_Brown duration-100 transition-colors ease-out bg-Lead rounded-lg text-Lynx_White inline-flex px-10 py-3 justify-center items-center gap-10">
      <Link href={link}>{children}</Link>
    </button>
  );
};

export default Button;
