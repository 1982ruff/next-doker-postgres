import AsidePage from "@/components/Admin/Aside";
import NavbarAdmin from "@/components/Admin/Navbar";

export default function AdminLayout({ children }) {
  return (
    <section className="flex max-w-full mx-auto">
      <div className="p-5 basis-1/4 bg-slate-100">
        <AsidePage />
      </div>
      <div className="flex flex-col gap-5 p-5 bg-slate-50 basis-3/4">
        <NavbarAdmin />
        {children}
      </div>
    </section>
  );
}
