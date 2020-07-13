import Link from "next/link";
import SEO from "@/core/SEO.js";

export default function Wrapper(frontMatter) {
  return ({ children }) => (
    <>
      <SEO
        url={`https://next-new-blogger.vercel.app/posts/${frontMatter.slug}`}
        {...frontMatter}
      />
      <header>
        <h1>San Blog</h1>
        <p>science & code</p>
        <Link href="/">
          <a>Return to Posts</a>
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}
