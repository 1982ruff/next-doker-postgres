import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center gap-1 px-2 py-1 text-sm text-white rounded-md bg-Basalt_grey hover:bg-Lead">
        <ChevronLeft size={15} /> Previous
      </button>
      <button className="flex items-center gap-1 px-2 py-1 text-sm text-white rounded-md bg-Basalt_grey hover:bg-Lead">
        Next <ChevronRight size={15} />
      </button>
    </div>
  );
};

export default Pagination;
