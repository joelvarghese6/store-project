const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="text-lg font-semibold tracking-tight">Minimal Store</div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Essentials for modern living. Curated, quality pieces delivered to your door.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm sm:items-end sm:text-right">
          
          <div className="text-muted-foreground">
            <span className="block">support@minimal.store</span>
            <span className="block">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {year} Minimal Store. All rights reserved.</span>
          <span className="space-x-3">
            <a className="underline-offset-4 hover:underline" href="/privacy">
              Privacy
            </a>
            <a className="underline-offset-4 hover:underline" href="/terms">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};