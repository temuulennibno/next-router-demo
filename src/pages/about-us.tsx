import Link from "next/link";

export default function Page() {
  return (
    <>
      Hello about-us.tsx file
      <Link className="underline" href="/">
        Go to home
      </Link>
    </>
  );
}
