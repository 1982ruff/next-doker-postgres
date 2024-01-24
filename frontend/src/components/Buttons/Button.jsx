import Link from "next/link";

const Button = ({ children, link, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-10 px-6 py-2 text-lg transition-colors duration-100 ease-out rounded-lg lg:text-xl w-fit hover:bg-Satoimo_Brown bg-Lead text-Lynx_White lg:px-10 lg:py-3"
    >
      <Link href={link}>{children}</Link>
    </button>
  );
};

export default Button;
