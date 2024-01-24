"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { Checkbox } from "@/components/ui/checkbox";

const AddProductPage = () => {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    priceOld: 0,
    isFeatured: true,
    isNew: true,
    shipping: 15,
    catSlug: "",
  });
  const [option, setOption] = useState([]);
  const [options, setOptions] = useState([]);
  const [alert, setAlert] = useState("");
  const [file, setFile] = useState();
  const [checked, setChecked] = useState();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const changeOption = (e) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        body: JSON.stringify({
          image: file[0].url,
          ...inputs,
          options,
        }),
      });
      const data = await res.json();
      //   router.push(`/product/${data.slug}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center p-5 ">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
        {/* Image Upload */}
        {/* <div className="flex flex-col w-full gap-2 ">
          <label
            className="flex items-center gap-4 text-sm cursor-pointer"
            htmlFor="file"
          >
            <Upload />
            <span>Upload Image</span>
          </label>
          <input
            type="file"
            onChange={handleChangeImg}
            id="file"
            className="hidden"
          />
        </div> */}
        <div className="flex items-center gap-6">
          <UploadButton
            className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setFile(res);
              setAlert("Upload Completed");
            }}
            onUploadError={(error) => {
              setAlert(`ERROR! ${error.message}`);
            }}
          />

          <span className="">{alert}</span>
        </div>

        {/* Title & Slug */}
        <div className="grid w-full grid-cols-2 gap-5">
          <div className="flex flex-col w-full gap-2 ">
            <label className="text-sm">Title</label>
            <input
              className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
              type="text"
              placeholder="Couch Loveseat"
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full gap-2 ">
            <label className="text-sm">Slug</label>
            <input
              className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
              type="text"
              placeholder="couch-loveseat"
              name="slug"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col w-full gap-2 ">
          <label className="text-sm">Category</label>
          <input
            className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
            type="text"
            placeholder="seats"
            name="catSlug"
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col w-full gap-2">
          <label className="text-sm">Description</label>
          <textarea
            rows={3}
            className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since."
            name="description"
            onChange={handleChange}
          />
        </div>

        {/* Price & Price Old */}
        <div className="grid w-full grid-cols-2 gap-5">
          <div className="flex flex-col w-full gap-2 ">
            <label className="text-sm">Price</label>
            <input
              className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
              type="number"
              placeholder="199"
              name="price"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full gap-2 ">
            <label className="text-sm">Price Old</label>
            <input
              className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
              type="number"
              placeholder="299"
              name="priceOld"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-5">
          {/* Shipping */}
          <div className="flex flex-col w-full gap-2 ">
            <label className="text-sm">Shipping (Days)</label>
            <input
              className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
              type="number"
              placeholder="15"
              name="shipping"
              onChange={handleChange}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm">Tags</label>
            <div className="flex">
              <input
                className="p-4 rounded-sm outline-none ring-1 ring-slate-200 placeholder:text-slate-300"
                type="text"
                placeholder="tag"
                name="tags"
                onChange={changeOption}
              />

              <button
                className="p-2 text-white bg-gray-500"
                onClick={() => setOptions((prev) => [...prev, option])}
              >
                Add Option
              </button>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {options.map((opt) => (
                <div
                  key={opt.tags}
                  className="p-2 text-gray-400 bg-gray-200 rounded-md cursor-pointer"
                  onClick={() =>
                    setOptions((prev) =>
                      prev.filter((item) => item.tags !== opt.tags)
                    )
                  }
                >
                  <span>{opt.tags}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* isFeatured & isNew */}
        <div className="flex items-center w-full gap-5">
          <div className="flex items-center gap-3 ">
            <Checkbox onClick={() => setChecked(!checked)} id="isFeatured" />
            <label
              htmlFor="isFeatured"
              className="text-sm font-light leading-6 cursor-pointer xl:text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-80"
            >
              Featured
            </label>
          </div>

          <div className="flex items-center gap-3 ">
            <Checkbox onClick={() => setChecked(!checked)} id="isNew" />
            <label
              htmlFor="isNew"
              className="text-sm font-light leading-6 cursor-pointer xl:text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-80"
            >
              New
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="relative flex items-center justify-center w-48 p-4 text-white bg-red-500 rounded-md h-14"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
