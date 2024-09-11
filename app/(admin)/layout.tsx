import NavbarAdmin from "./_components/navbar-admin";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavbarAdmin />
      {children}
    </section>
  );
}
