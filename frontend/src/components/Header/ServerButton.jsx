import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ServerButton = () => {
  const { status, session } = useSession();
  const router = useRouter();

  const logout = () => {
    signOut();
    router.push("/");
  };

  return (
    <>
      {status === "authenticated" ? (
        <div className="">
          <Button variant="ghost" className=" hover:bg-Lynx_White">
            <Link href={"/orders"}>Orders</Link>
          </Button>

          <Button
            onClick={logout}
            variant="ghost"
            className=" hover:bg-Lynx_White"
          >
            Logout
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
