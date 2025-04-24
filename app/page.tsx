import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="https://yt3.googleusercontent.com/A784tCaoCdqlwu57NcG-NZo6mNf-6hK7YnCuHIe0NT8rhUx9qG8nt7rsPBT-2aPbhjlPiid5=s900-c-k-c0x00ffffff-no-rj"
          alt="APX Logo"
          width={100}
          height={100}
          priority
        />
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          This is a <strong>Next.js</strong> Serverless API Project for Level 3
          in{" "}
          <a className="underline" target="_blank" href="https://apx.school/">
            <strong>APX.school Academy</strong>
          </a>
        </p>
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Check the repo in{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/lucasfrezzini/apx-n3-10-01-serverless-api"
          >
            <strong>Github here ◁</strong>
          </a>
        </p>
      </main>
    </div>
  );
}
