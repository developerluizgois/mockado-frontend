import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="w-screen h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="mt-10 font-semibold text-[#f2f2f2]">
            This page does not exist!
          </h1>
          <Link
            className="text-[#f2f2f2] text-decoration-line: underline"
            href="/"
          >
            Return to home
          </Link>
        </main>
      </body>
    </html>
  );
}
