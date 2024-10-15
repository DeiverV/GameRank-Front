export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Users Pages</h1>
      {children}
    </section>
  );
}
