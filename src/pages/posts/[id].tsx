import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id, q } = router.query;
  return (
    <>
      Dynamic route example! {id}, {q}
    </>
  );
}
