import Navigation from "../components/shared/Navigation";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {children}
      </main>
    </>
  );
} 