import SearchComponent from "@/components/Admin/Search";
import Image from "next/image";
import Link from "next/link";
import noavatar from "/public/noavatar.png";
import Pagination from "@/components/Admin/Pagination";
import { SquarePen } from "lucide-react";
import DeleteButton from "@/components/DeleteButton";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const ProductsAdminPage = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between ">
        <SearchComponent placeholder="Search for a product..." />

        <Link href={"/admin/products/add"}>
          <button className="px-5 py-1 rounded-md bg-Satoimo_Brown hover:bg-Satoimo_Brown/80 text-Lynx_White">
            Add Product
          </button>
        </Link>
      </div>

      <div className="px-5">
        <table className="w-full table-auto border-spacing-px">
          <thead>
            <tr>
              <td>Title</td>
              <td>Category</td>
              <td>Tags</td>
              <td>Created At</td>
              <td>Price</td>
              <td>Price Old</td>
              <td>New</td>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, idx) => {
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
                          alt={item.title}
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

                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td className="capitalize ">{item.catSlug}</td>
                  <td>{item.tags}</td>
                  <td>{date.toLocaleDateString("ru-RU", options)}</td>
                  <td>{item.price}</td>
                  <td>{item.priceOld}</td>

                  <td>
                    <div className="flex ">
                      {item.isNew && (
                        <span className="flex items-center gap-3 px-2 py-1 text-xs text-white bg-green-700 rounded-md ">
                          New
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-1">
                      <button className="px-2 py-1 text-xs text-white bg-yellow-600 rounded-md">
                        <SquarePen size={17} />
                      </button>
                      <DeleteButton id={item.id} />
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

export default ProductsAdminPage;
