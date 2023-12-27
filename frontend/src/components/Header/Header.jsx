"use client";
import { menu } from "@/data";
import Link from "next/link";
import { bitter } from "../../../font";
import { usePathname } from "next/navigation";

import ServerButton from "./ServerButton";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/register" && pathname !== "/login" ? (
        <header className="flex flex-row items-center justify-between px-20 border-b py-7">
          <Logo />
          <nav>
            <Menu />
          </nav>
          <ServerButton />
          <Account />
        </header>
      ) : null}
    </>
  );
};

export default Header;

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.2467 25.719H19.3691C18.185 25.7212 17.0157 25.9833 15.9439 26.4866C14.8721 26.99 13.9238 27.7224 13.1659 28.6323C12.408 29.5421 11.859 30.6071 11.5576 31.7523C11.2562 32.8974 11.2097 34.0948 11.4215 35.2598H40.192C40.4067 34.0946 40.3624 32.8964 40.0623 31.7502C39.7622 30.604 39.2135 29.5378 38.4553 28.6273C37.6971 27.7168 36.7479 26.9843 35.6749 26.4817C34.6019 25.9791 33.4315 25.7187 32.2467 25.719Z"
          stroke="#644321"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M34.7417 26.1096C35.6371 23.7771 37.2188 21.7709 39.2781 20.3561C41.3373 18.9413 43.7773 18.1843 46.2758 18.1851H49.5131C49.7949 18.1822 50.0668 18.2884 50.2721 18.4815C50.4774 18.6745 50.6 18.9395 50.6144 19.221C50.6287 19.5024 50.5336 19.7785 50.3491 19.9914C50.1645 20.2043 49.9047 20.3376 49.6241 20.3634L47.136 20.6154L43.5241 31.6963C42.306 35.4349 39.936 38.6921 36.7535 41.0012C36.6286 41.0891 36.5222 41.177 36.3835 41.2602C33.6266 43.1603 30.4088 44.2829 27.0682 44.5099C23.7277 44.737 20.3876 44.0601 17.399 42.5505C16.6454 42.1714 15.9191 41.7403 15.2254 41.2602C11.8591 38.9433 9.3496 35.5822 8.08478 31.6963L4.47286 20.6154L1.9917 20.3634C1.71108 20.3376 1.4513 20.2043 1.26672 19.9914C1.08214 19.7785 0.987075 19.5024 1.00142 19.221C1.01576 18.9395 1.13839 18.6745 1.34366 18.4815C1.54892 18.2884 1.82091 18.1822 2.10269 18.1851H5.34C7.8378 18.1872 10.2765 18.9453 12.3352 20.3598C14.3939 21.7742 15.9763 23.7787 16.8741 26.1096"
          stroke="#644321"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M12.1661 20.2548L12.4991 18.0788L12.3141 17.0105C11.9761 15.0509 12.0693 13.0412 12.587 11.1213C13.1048 9.20136 14.0348 7.41734 15.3123 5.89342C16.5897 4.36949 18.184 3.14229 19.984 2.29722C21.784 1.45215 23.7466 1.00952 25.7351 1.00015C27.7236 0.990783 29.6902 1.41489 31.4981 2.24296C33.3061 3.07103 34.9118 4.28317 36.2035 5.79498C37.4953 7.3068 38.442 9.08197 38.9779 10.9969C39.5138 12.9119 39.6258 14.9206 39.3063 16.8833L38.9456 19.0893L39.1653 20.4213"
          stroke="#644321"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M17.4014 42.5505L17.1401 50.1975C17.1401 50.4103 17.0556 50.6144 16.9051 50.7649C16.7546 50.9154 16.5505 50.9999 16.3377 50.9999C16.1249 50.9999 15.9208 50.9154 15.7703 50.7649C15.6199 50.6144 15.5353 50.4103 15.5353 50.1975L15.2278 41.251C15.9212 41.7342 16.6475 42.1684 17.4014 42.5505Z"
          stroke="#644321"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M36.3858 41.251L36.0782 50.1883C36.0782 50.4011 35.9937 50.6052 35.8432 50.7556C35.6927 50.9061 35.4887 50.9907 35.2758 50.9907C35.063 50.9907 34.8589 50.9061 34.7085 50.7556C34.558 50.6052 34.4735 50.4011 34.4735 50.1883L34.2122 42.5436C34.9653 42.1628 35.6916 41.7309 36.3858 41.251Z"
          stroke="#644321"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
      <p
        className={`${bitter.className} font-semibold text-4xl text-Satoimo_Brown uppercase `}
      >
        Furnitura
      </p>
    </Link>
  );
};

const Menu = () => {
  return (
    <ul className="flex gap-16">
      {menu.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.link}
            className="text-xl font-normal text-Lead hover:text-Satoimo_Brown"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Account = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex items-center gap-8">
        <li>
          <Link href={"/account"} className=" hover:text-Satoimo_Brown">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11.6308C10.845 11.6308 9.85627 11.2196 9.03377 10.3971C8.21127 9.57462 7.80002 8.58588 7.80002 7.43091C7.80002 6.27591 8.21127 5.28718 9.03377 4.4647C9.85627 3.64221 10.845 3.23096 12 3.23096C13.155 3.23096 14.1437 3.64221 14.9662 4.4647C15.7887 5.28718 16.2 6.27591 16.2 7.43091C16.2 8.58588 15.7887 9.57462 14.9662 10.3971C14.1437 11.2196 13.155 11.6308 12 11.6308ZM3 18.9462V18.1016C3 17.5139 3.15962 16.9697 3.47886 16.4689C3.79808 15.9682 4.22461 15.5832 4.75846 15.3139C5.94462 14.7324 7.14116 14.2963 8.34809 14.0055C9.55501 13.7147 10.7723 13.5694 12 13.5694C13.2277 13.5694 14.445 13.7147 15.6519 14.0055C16.8588 14.2963 18.0554 14.7324 19.2415 15.3139C19.7754 15.5832 20.2019 15.9682 20.5211 16.4689C20.8404 16.9697 21 17.5139 21 18.1016V18.9462C21 19.4523 20.8227 19.8827 20.4681 20.2373C20.1135 20.5919 19.6831 20.7692 19.177 20.7692H4.82305C4.3169 20.7692 3.88653 20.5919 3.53193 20.2373C3.17731 19.8827 3 19.4523 3 18.9462ZM4.79998 18.9693H19.2V18.1016C19.2 17.8585 19.1296 17.6335 18.9889 17.4266C18.8481 17.2197 18.6569 17.0508 18.4154 16.92C17.3816 16.4108 16.3274 16.0251 15.2528 15.7627C14.1783 15.5004 13.094 15.3693 12 15.3693C10.906 15.3693 9.82167 15.5004 8.74715 15.7627C7.67262 16.0251 6.61844 16.4108 5.5846 16.92C5.34306 17.0508 5.15191 17.2197 5.01115 17.4266C4.87037 17.6335 4.79998 17.8585 4.79998 18.1016V18.9693ZM12 9.8309C12.66 9.8309 13.225 9.5959 13.695 9.1259C14.165 8.6559 14.4 8.09091 14.4 7.43091C14.4 6.77091 14.165 6.20591 13.695 5.73592C13.225 5.26592 12.66 5.03092 12 5.03092C11.34 5.03092 10.775 5.26592 10.305 5.73592C9.83499 6.20591 9.59999 6.77091 9.59999 7.43091C9.59999 8.09091 9.83499 8.6559 10.305 9.1259C10.775 9.5959 11.34 9.8309 12 9.8309Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </li>{" "}
        <li>
          <Link href={"/wishlist"} className=" hover:text-Satoimo_Brown">
            {pathname === "/wishlist" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9904 20.5596C11.7763 20.5596 11.5612 20.5211 11.3452 20.4442C11.1291 20.3672 10.9391 20.2467 10.775 20.0826L9.33848 18.7769C7.56539 17.1602 5.98238 15.5721 4.58943 14.0125C3.19648 12.4528 2.5 10.782 2.5 8.99998C2.5 7.58076 2.97852 6.39263 3.93558 5.43558C4.89263 4.47853 6.08076 4 7.49998 4C8.30638 4 9.10285 4.1859 9.8894 4.5577C10.6759 4.9295 11.3795 5.53335 12 6.36925C12.6205 5.53335 13.324 4.9295 14.1105 4.5577C14.8971 4.1859 15.6936 4 16.5 4C17.9192 4 19.1073 4.47853 20.0644 5.43558C21.0214 6.39263 21.5 7.58076 21.5 8.99998C21.5 10.8012 20.7916 12.4907 19.375 14.0682C17.9583 15.6458 16.3788 17.2205 14.6365 18.7923L13.2154 20.0826C13.0513 20.2467 12.8596 20.3672 12.6404 20.4442C12.4211 20.5211 12.2045 20.5596 11.9904 20.5596Z"
                  fill="#644321"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9904 20.5596C11.7763 20.5596 11.5612 20.5211 11.3452 20.4442C11.1291 20.3672 10.9391 20.2467 10.775 20.0826L9.33848 18.7769C7.56539 17.1602 5.98238 15.5721 4.58943 14.0125C3.19648 12.4528 2.5 10.782 2.5 8.99998C2.5 7.58076 2.97852 6.39263 3.93558 5.43558C4.89263 4.47853 6.08076 4 7.49998 4C8.30638 4 9.10285 4.1859 9.8894 4.5577C10.6759 4.9295 11.3795 5.53335 12 6.36925C12.6205 5.53335 13.324 4.9295 14.1105 4.5577C14.8971 4.1859 15.6936 4 16.5 4C17.9192 4 19.1073 4.47853 20.0644 5.43558C21.0214 6.39263 21.5 7.58076 21.5 8.99998C21.5 10.8012 20.7916 12.4907 19.375 14.0682C17.9583 15.6458 16.3788 17.2205 14.6365 18.7923L13.2154 20.0826C13.0513 20.2467 12.8596 20.3672 12.6404 20.4442C12.4211 20.5211 12.2045 20.5596 11.9904 20.5596ZM11.2808 7.88845C10.7397 7.06408 10.1702 6.45992 9.5721 6.07595C8.97402 5.69197 8.28331 5.49998 7.49998 5.49998C6.49998 5.49998 5.66664 5.83331 4.99998 6.49998C4.33331 7.16664 3.99998 7.99998 3.99998 8.99998C3.99998 9.80254 4.25863 10.6416 4.77593 11.5173C5.29323 12.3929 5.94257 13.2634 6.72398 14.1288C7.50539 14.9942 8.35187 15.8397 9.2634 16.6653C10.1749 17.491 11.0198 18.2583 11.798 18.9673C11.8557 19.0186 11.923 19.0442 12 19.0442C12.0769 19.0442 12.1442 19.0186 12.2019 18.9673C12.9801 18.2583 13.825 17.491 14.7366 16.6653C15.6481 15.8397 16.4946 14.9942 17.276 14.1288C18.0574 13.2634 18.7067 12.3929 19.224 11.5173C19.7413 10.6416 20 9.80254 20 8.99998C20 7.99998 19.6666 7.16664 19 6.49998C18.3333 5.83331 17.5 5.49998 16.5 5.49998C15.7166 5.49998 15.0259 5.69197 14.4279 6.07595C13.8298 6.45992 13.2602 7.06408 12.7192 7.88845C12.6346 8.01665 12.5282 8.11281 12.4 8.17693C12.2718 8.24103 12.1384 8.27308 12 8.27308C11.8615 8.27308 11.7282 8.24103 11.6 8.17693C11.4718 8.11281 11.3654 8.01665 11.2808 7.88845Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </Link>{" "}
        </li>
        <li>
          <Link href={"/cart"} className=" hover:text-Satoimo_Brown">
            {pathname === "/cart" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.65385 21.5576C8.16797 21.5576 7.75483 21.3874 7.41445 21.0471C7.07407 20.7067 6.90388 20.2936 6.90388 19.8077C6.90388 19.3218 7.07407 18.9086 7.41445 18.5683C7.75483 18.2279 8.16797 18.0577 8.65385 18.0577C9.13975 18.0577 9.55289 18.2279 9.89328 18.5683C10.2337 18.9086 10.4039 19.3218 10.4039 19.8077C10.4039 20.2936 10.2337 20.7067 9.89328 21.0471C9.55289 21.3874 9.13975 21.5576 8.65385 21.5576ZM18.3462 21.5576C17.8603 21.5576 17.4471 21.3874 17.1067 21.0471C16.7663 20.7067 16.5962 20.2936 16.5962 19.8077C16.5962 19.3218 16.7663 18.9086 17.1067 18.5683C17.4471 18.2279 17.8603 18.0577 18.3462 18.0577C18.832 18.0577 19.2452 18.2279 19.5856 18.5683C19.9259 18.9086 20.0961 19.3218 20.0961 19.8077C20.0961 20.2936 19.9259 20.7067 19.5856 21.0471C19.2452 21.3874 18.832 21.5576 18.3462 21.5576ZM6.79615 4.25H20.6807C21.0897 4.25 21.399 4.42403 21.6086 4.7721C21.8182 5.12018 21.8282 5.47563 21.6384 5.83845L18.4346 11.6423C18.2705 11.9307 18.0535 12.1554 17.7836 12.3163C17.5138 12.4772 17.2179 12.5576 16.8962 12.5576H9.6L8.4423 14.673C8.39102 14.75 8.38942 14.8333 8.4375 14.9231C8.48558 15.0128 8.5577 15.0577 8.65385 15.0577H19.3462C19.559 15.0577 19.7372 15.1295 19.8808 15.2731C20.0243 15.4166 20.0961 15.5948 20.0961 15.8077C20.0961 16.0205 20.0243 16.1987 19.8808 16.3423C19.7372 16.4858 19.559 16.5576 19.3462 16.5576H8.65385C7.9872 16.5576 7.48624 16.2701 7.15098 15.6952C6.81573 15.1202 6.80387 14.5461 7.1154 13.9731L8.54235 11.4077L4.90388 3.74995H3.75003C3.53719 3.74995 3.35899 3.67816 3.21542 3.53457C3.07181 3.39099 3 3.21279 3 2.99998C3 2.78716 3.0718 2.60896 3.2154 2.46538C3.35898 2.32179 3.53718 2.25 3.75 2.25H5.27883C5.44934 2.25 5.60832 2.29519 5.75575 2.38558C5.90318 2.47596 6.01537 2.6032 6.0923 2.7673L6.79615 4.25Z"
                  fill="#644321"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.65385 21.5576C8.16797 21.5576 7.75483 21.3874 7.41445 21.0471C7.07407 20.7067 6.90388 20.2936 6.90388 19.8077C6.90388 19.3218 7.07407 18.9086 7.41445 18.5683C7.75483 18.2279 8.16797 18.0577 8.65385 18.0577C9.13975 18.0577 9.55289 18.2279 9.89328 18.5683C10.2337 18.9086 10.4039 19.3218 10.4039 19.8077C10.4039 20.2936 10.2337 20.7067 9.89328 21.0471C9.55289 21.3874 9.13975 21.5576 8.65385 21.5576ZM18.3462 21.5576C17.8603 21.5576 17.4471 21.3874 17.1067 21.0471C16.7663 20.7067 16.5962 20.2936 16.5962 19.8077C16.5962 19.3218 16.7663 18.9086 17.1067 18.5683C17.4471 18.2279 17.8603 18.0577 18.3462 18.0577C18.832 18.0577 19.2452 18.2279 19.5856 18.5683C19.9259 18.9086 20.0961 19.3218 20.0961 19.8077C20.0961 20.2936 19.9259 20.7067 19.5856 21.0471C19.2452 21.3874 18.832 21.5576 18.3462 21.5576ZM7.51538 5.74998L10.05 11.0577H16.8673C16.925 11.0577 16.9763 11.0433 17.0212 11.0144C17.066 10.9856 17.1045 10.9455 17.1366 10.8942L19.8192 6.0192C19.8577 5.94868 19.8609 5.88618 19.8289 5.8317C19.7968 5.7772 19.7423 5.74995 19.6654 5.74995L7.51538 5.74998ZM6.79615 4.25003H20.6807C21.0897 4.25003 21.399 4.42406 21.6086 4.77213C21.8182 5.12021 21.8282 5.47566 21.6384 5.83847L18.4346 11.6423C18.2705 11.9307 18.0535 12.1554 17.7836 12.3163C17.5138 12.4772 17.2179 12.5576 16.8962 12.5576H9.6L8.4423 14.673C8.39102 14.75 8.38942 14.8333 8.4375 14.9231C8.48558 15.0128 8.5577 15.0577 8.65385 15.0577H19.3462C19.559 15.0577 19.7372 15.1295 19.8808 15.2731C20.0243 15.4166 20.0961 15.5948 20.0961 15.8077C20.0961 16.0205 20.0243 16.1987 19.8808 16.3423C19.7372 16.4858 19.559 16.5576 19.3462 16.5576H8.65385C7.9872 16.5576 7.48624 16.2701 7.15098 15.6952C6.81573 15.1202 6.80387 14.5461 7.1154 13.9731L8.54235 11.4077L4.90388 3.74995H3.75003C3.53719 3.74995 3.35899 3.67816 3.21542 3.53457C3.07181 3.39099 3 3.21279 3 2.99998C3 2.78716 3.0718 2.60896 3.2154 2.46538C3.35898 2.32179 3.53718 2.25 3.75 2.25H5.27883C5.44934 2.25 5.60832 2.29519 5.75575 2.38558C5.90318 2.47596 6.01537 2.6032 6.0923 2.7673L6.79613 4.25L6.79615 4.25003Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </Link>
        </li>
      </ul>
    </>
  );
};
