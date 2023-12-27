import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";

const ServerButton = () => {
  const { status } = useSession();

  console.log(status);

  return (
    <>
      {status === "authenticated" ? (
        <div className="">
          <Button variant="ghost" className=" hover:bg-Lynx_White">
            <Link href={"/cart"}>Orders</Link>
          </Button>

          <Button variant="ghost" className=" hover:bg-Lynx_White">
            <Link onClick={() => signOut()} href={"/logout"}>
              Logout
            </Link>
          </Button>
        </div>
      ) : (
        <Button variant="ghost" className=" hover:bg-Lynx_White">
          <Link href={"/login"}>Login</Link>
        </Button>
      )}
    </>
  );
};

export default ServerButton;
