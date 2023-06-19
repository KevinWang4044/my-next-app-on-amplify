import Link from "next/link";

type THomeProps = {
  formattedDate: string
}

// pages/index.js
export default function Home({ formattedDate }:THomeProps) {
  return (
      <>
        <h1>Static page</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
        <p>
          <Link href="/ssr">View a server-side rendered page.</Link>
        </p>
      </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}