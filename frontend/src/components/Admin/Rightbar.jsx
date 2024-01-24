import Image from "next/image";
import promo1 from "/public/promo/promo1.png";
import { PlayCircle } from "lucide-react";

const Rightbar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative p-5 rounded-lg bg-slate-100">
        <div className=" absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image
            src={promo1}
            alt=""
            fill
            className="object-cover object-right-bottom transform opacity-30 -scale-x-100"
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-lg font-semibold">Available now</span>

          <h3 className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h3>

          <span className="text-sm font-medium">Takes 4 minute to learn</span>

          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            praesentium magni nesciunt ex dolor, quia vel eligendi id corporis,
            voluptatibus hic ad sed nemo nobis rerum dicta cum velit sapiente?
          </p>

          <button className="flex items-center gap-2 px-4 py-1 text-sm rounded-md hover:bg-slate-50 hover:text-Orange w-fit bg-slate-200">
            <PlayCircle size={15} />
            Watch
          </button>
        </div>
      </div>

      <div className="relative p-5 rounded-lg bg-slate-100">
        <div className=" absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image
            src={promo1}
            alt=""
            fill
            className="object-cover object-right-bottom transform opacity-30 -scale-x-100"
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-lg font-semibold">Available now</span>

          <h3 className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h3>

          <span className="text-sm font-medium">Takes 4 minute to learn</span>

          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            praesentium magni nesciunt ex dolor, quia vel eligendi id corporis,
            voluptatibus hic ad sed nemo nobis rerum dicta cum velit sapiente?
          </p>

          <button className="flex items-center gap-2 px-4 py-1 text-sm rounded-md hover:bg-slate-50 hover:text-Orange w-fit bg-slate-200">
            <PlayCircle size={15} />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
