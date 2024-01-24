import Image from "next/image";
import avatar from "/public/aboutPage/avatar1.jpg";

const Transactions = () => {
  return (
    <div className="p-5 rounded-lg bg-slate-100">
      <h2 className="mb-5 text-xl">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody className="">
          <tr>
            <td className="py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt=""
                />
                John Doe
              </div>
            </td>

            <td className="py-3">
              <span className="px-2 py-1 text-sm bg-yellow-200 rounded-md ">
                Pending
              </span>
            </td>
            <td className="py-3">14.02.2024</td>
            <td className="py-3">3.200$</td>
          </tr>
          <tr>
            <td className="py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt=""
                />
                John Doe
              </div>
            </td>

            <td className="py-3">
              <span className="px-2 py-1 text-sm bg-green-200 rounded-md ">
                Done
              </span>
            </td>
            <td className="py-3">14.02.2024</td>
            <td className="py-3">3.200$</td>
          </tr>
          <tr>
            <td className="py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt=""
                />
                John Doe
              </div>
            </td>

            <td className="py-3">
              <span className="px-2 py-1 text-sm bg-red-200 rounded-md ">
                Cancelled
              </span>
            </td>
            <td className="py-3">14.02.2024</td>
            <td className="py-3">3.200$</td>
          </tr>
          <tr>
            <td className="py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt=""
                />
                John Doe
              </div>
            </td>

            <td className="py-3">
              <span className="px-2 py-1 text-sm bg-yellow-200 rounded-md ">
                Pending
              </span>
            </td>
            <td className="py-3">14.02.2024</td>
            <td className="py-3">3.200$</td>
          </tr>
          <tr>
            <td className="py-3">
              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt=""
                />
                John Doe
              </div>
            </td>

            <td className="py-3">
              <span className="px-2 py-1 text-sm bg-yellow-200 rounded-md ">
                Pending
              </span>
            </td>
            <td className="py-3">14.02.2024</td>
            <td>3.200$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
