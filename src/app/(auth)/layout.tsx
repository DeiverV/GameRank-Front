export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Auth Pages</h1>
      {children}
    </section>
  );
}
