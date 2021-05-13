import Image from "next/image";
import Head from "@components/Head";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <Head />
      <div className="relative place-items-center bg-gray-800" style={{ width: 1200, height: 630 }}>
        <div className="pt-20">
          <img src="/profile.jpg" className="flex mx-auto h-60 w-60 rounded-full" />
        </div>
        <h2 className="text-center mt-4 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
          Oh Hello there,
        </h2>
        <p className="text-center mt-4 max-w-3xl mx-auto font-semibold text-4xl text-gray-400">
          Welcome to my Projects
        </p>
        <p className="text-center mt-4 max-w-3xl mx-auto font-semibold text-3xl text-lime-600">
          https://timtb.dev/projects
        </p>
      </div>
    </>
  );
}