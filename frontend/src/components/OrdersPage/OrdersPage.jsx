"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import Link from "next/link";

const Orders = () => {
  const queryClient = useQueryClient();
  const { data: session, status } = useSession();
  const router = useRouter();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });
  const mutation = useMutation({
    mutationFn: ({ id, status }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  if (status === "unauthenticated") {
    toast({
      variant: "destructive",
      title: "You are not unauthenticated!",
      action: (
        <ToastAction altText="Login">
          <Link href={"/login"}>Login</Link>
        </ToastAction>
      ),
    });

    router.push("/login");
  }

  if (isLoading || status === "loading") {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const handleUpdate = (e, id) => {
    e.preventDefault();
    mutation.mutate({ id, status });
    toast({
      title: "The order status has been changed!",
    });
  };

  return (
    <div className="min-h-screen p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              className={`${
                item.status === "delivered" ? "bg-green-50" : "bg-red-50"
              }`}
              key={item.id}
            >
              <td className="hidden px-1 py-6 md:block">{item.id}</td>
              <td className="px-1 py-6">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="px-1 py-6">{item.price}</td>
              <td className="hidden px-1 py-6 md:block">{item.products[1]}</td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 rounded-md ring-1 ring-red-100"
                    />
                    <button className="p-2 bg-red-400 rounded-full text-Lynx_White">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                  </form>
                </td>
              ) : (
                <td className="px-1 py-6">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
