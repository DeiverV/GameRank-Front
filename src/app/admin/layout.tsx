export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Admin Pages</h1>
      {children}
    </section>
  );
}
