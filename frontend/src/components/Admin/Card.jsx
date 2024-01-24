import { CircleUser } from "lucide-react";

const Card = () => {
  return (
    <div className="flex w-full gap-5 p-6 rounded-lg bg-slate-100">
      <CircleUser />
      <div className="flex flex-col gap-5">
        <span className="text-lg">Total Users</span>
        <span className="text-xl font-bold">1.273</span>
        <span className="">
          <span className="text-green-600 ">12% </span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
