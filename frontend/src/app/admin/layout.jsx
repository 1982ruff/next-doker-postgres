import AsidePage from "@/components/Admin/Aside";

export default function AdminLayout({ children }) {
  return (
    <section className="flex max-w-[1536px] mx-auto">
      <AsidePage />
      {children}
    </section>
  );
}
