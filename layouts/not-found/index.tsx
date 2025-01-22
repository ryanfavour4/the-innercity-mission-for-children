import React from "react";
import Link from "next/link";

export default function NotFound404() {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold">404</h3>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" className="btn-primary">
                            Go back home
                        </Link>
                        <Link
                            href="/contact"
                            className="whitespace-nowrap text-base font-semibold text-gray-900"
                        >
                            Contact support{" "}
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
