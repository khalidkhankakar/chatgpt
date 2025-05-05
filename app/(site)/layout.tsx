import Navbar from "@/components/shared/navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div
      className=""
    >
      <Navbar />

      <main className="h-[calc(100vh-64px)] p-5">

        {children}
      </main>
    </div>

  );
}
