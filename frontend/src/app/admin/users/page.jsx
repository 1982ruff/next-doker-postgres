import SearchComponent from "@/components/Admin/Search";
import Image from "next/image";
import Link from "next/link";
import noavatar from "/public/noavatar.png";
import { AlertOctagon, CheckCircle } from "lucide-react";
import Pagination from "@/components/Admin/Pagination";
import { SquarePen, Trash2 } from "lucide-react";

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const UsersAdminPage = async () => {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between ">
        <SearchComponent placeholder="Search for a user..." />

        <Link href={"/admin/users/add"}>
          <button className="px-5 py-1 rounded-md bg-Satoimo_Brown hover:bg-Satoimo_Brown/80 text-Lynx_White">
            Add User
          </button>
        </Link>
      </div>

      <div className="px-5">
        <table className="w-full table-auto border-spacing-px">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, idx) => {
              let date = new Date(item["createdAt"]);
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };

              return (
                <tr key={idx} className="">
                  <td>
                    <div className="flex items-center gap-3 p-1">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="rounded-full "
                        />
                      ) : (
                        <Image
                          src={noavatar}
                          alt="No Image"
                          className=""
                          width={40}
                          height={40}
                        />
                      )}

                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>{date.toLocaleDateString("ru-RU", options)}</td>
                  <td>
                    {item.isAdmin === true ? (
                      <span className="px-2 py-0.5 rounded-md text-xs text-white bg-red-700 ">
                        Admin
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-xs text-white bg-slate-700 ">
                        Client
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="flex">
                      {item.emailVerified ? (
                        <span className="flex items-center gap-3 px-2 py-1 text-xs text-white bg-green-700 rounded-md ">
                          <CheckCircle size={15} /> Verifyed
                        </span>
                      ) : (
                        <span className="flex items-center gap-3 px-2 py-0.5 text-xs text-white bg-orange-700 rounded-md ">
                          <AlertOctagon size={15} /> Not Verifyed
                        </span>
                      )}
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-1">
                      <button className="px-2 py-1 text-xs text-white bg-yellow-600 rounded-md">
                        <SquarePen size={17} />
                      </button>
                      <button className="px-2 py-1 text-xs text-white bg-red-600 rounded-md">
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default UsersAdminPage;
