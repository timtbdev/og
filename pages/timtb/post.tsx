import Image from "next/image";
import Head from "@components/Head";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

export async function getServerSideProps({ query }) {
  const { title, subtitle, image, url } = query;
  return {
    props: {
      title,
      subtitle,
      image,
      url,
    }, // will be passed to the page component as props
  };
}

export default function Post({ title, subtitle, image, url }: Props) {
  return (
    <>
      <Head />
      <div
        className="relative place-items-center bg-gray-800"
        style={{ width: 1200, height: 630 }}
      >
        <div className="pt-20">
          <img src={image} className="flex mx-auto h-60 w-60 rounded-full" />
        </div>
        <h2 className="text-center mt-4 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="text-center mt-4 max-w-3xl mx-auto font-semibold text-4xl text-gray-400">
          {subtitle}
        </p>
        <p className="text-center mt-4 max-w-3xl mx-auto font-semibold text-3xl text-lime-600">
          {url}
        </p>
      </div>
    </>
  );
}
