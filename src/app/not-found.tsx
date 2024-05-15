export default function NotFound() {
  return (
    <html>
      <body>
        <div className="lg:flex lg:flex-row-reverse">
          <main className="w-screen h-screen flex flex-col items-center justify-center gap-6 lg:w-[50vw]">
            <h1 className="mt-10 font-semibold">This page does not exist!</h1>
          </main>
        </div>
      </body>
    </html>
  );
}
