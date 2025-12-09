import Link from "next/link"

type NavbarProps = {
    storeName?: string
    cartCount?: number
}

export const Navbar = ({ storeName = "ShopEase", cartCount = 0 }: NavbarProps) => {
    const safeCartCount = Number.isFinite(cartCount) && cartCount > 0 ? cartCount : 0

    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <Link href={"/"}>
                        StoreName
                    </Link>
                </div>

                <button
                    type="button"
                    className="relative flex items-center gap-2 rounded-full px-3 py-2 text-gray-700 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    aria-label={`Cart with ${safeCartCount} item${safeCartCount === 1 ? "" : "s"}`}
                >
                    <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.75m-9.75 0L5.106 5.272A.75.75 0 0 1 5.84 4.35l12.057 1.746a.75.75 0 0 1 .633.85l-.878 6.146a.75.75 0 0 1-.744.658H7.5zm0 0-.621 3.106A1.5 1.5 0 0 0 8.356 18.75h8.288a1.5 1.5 0 0 0 1.477-1.394L18.75 14.25M9 21a.75.75 0 1 1-1.5 0A.75.75 0 0 1 9 21Zm9 0a.75.75 0 1 1-1.5 0A.75.75 0 0 1 18 21Z"
                        />
                    </svg>
                    <span className="text-sm font-medium">Cart</span>
                    <span className="sr-only">items in cart</span>
                    {safeCartCount > 0 ? (
                        <span className="absolute -right-2 -top-1 inline-flex min-w-6 justify-center rounded-full bg-emerald-600 px-2 text-xs font-semibold leading-5 text-white">
                            {safeCartCount}
                        </span>
                    ) : (
                        <span className="absolute -right-2 -top-1 inline-flex min-w-6 justify-center rounded-full bg-gray-300 px-2 text-xs font-semibold leading-5 text-gray-700">
                            0
                        </span>
                    )}
                </button>
            </div>
        </header>
    )
}