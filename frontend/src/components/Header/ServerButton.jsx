import Link from "next/link";
import { Button } from "../ui/button";
import { getServerSession } from "next-auth";
import { options } from "@/app/(api)/api/auth/[...nextauth]/options";

const ServerButton = async () => {
  const session = await getServerSession(options);
  return (
    <Button variant="ghost" className=" hover:bg-Lynx_White">
      {session ? (
        <Link href={"/api/auth/signout?callbackUrl=/"}>Logout</Link>
      ) : (
        <Link href={"/api/auth/signin"}>Login</Link>
      )}
    </Button>
  );
};

export default ServerButton;
