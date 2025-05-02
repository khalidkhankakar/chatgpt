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

      <main>

        {children}
      </main>
    </div>

  );
}
