"use client";

import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";

const DeleteButton = ({ id }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p className="">Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/");
      toast({
        variant: "success",
        title: "Product deleted...",
      });
    } else {
      const data = await res.json();
      toast({ variant: "destructive", title: "Error" + data });
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-2 py-1 text-xs text-white bg-red-600 rounded-md"
    >
      <Trash2 size={17} />
    </button>
  );
};

export default DeleteButton;
