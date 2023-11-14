import Navbar from "../components/nav-bar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`px-5`}>
      <Navbar />
      {children}
    </div>
  );
}
