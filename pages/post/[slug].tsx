import { groq } from "next-sanity";
import { getClient } from "@libs/sanity";
import Error from "next/error";
import { useRouter } from "next/router";
import { IPost } from "../../types";
import { GetStaticPropsContext } from "next";
import Head from "@components/Head";
import { blockContentToPlainText } from "react-portable-text";
import dateFormat from "date-fns/format";
import Image from "next/image";
import { urlFor } from "@libs/sanity";

const blogQuery = groq`
*[_type == "blog" && slug.current == $slug][0] {
    title,
    slug,
    releaseDate,
    author,
    category,
    keywords,
    image,
    imageDescription,
    description,
    content,
  }
`;

interface Props {
  post: IPost;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const post = await getClient().fetch(blogQuery, {
    slug: params.slug,
  });

  return {
    props: {
      post,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "blog" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default function Slug({ post }: Props) {
  const router = useRouter();
  const description = blockContentToPlainText(post.description);
  const imageUrl = urlFor(post.image).url() || "";

  if (!router.isFallback && !post) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <div
        className="relative bg-gray-800"
        style={{ width: 1200, height: 630 }}
      >
        <div className="h-56 bg-lime-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img className="w-full h-full object-cover" src={imageUrl} alt="" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              {post.title}
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              {dateFormat(new Date(post.releaseDate), "do MMMM yyyy")}
            </p>
            <p className="mt-3 text-lg text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
