import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-lightYellow pt-[4rem] sm:pt-[4rem] flex flex-col sm:flex-col pb-0 sm:gap-4 justify-center items-center w-full px-[3%] sm:px-[12%] min-h-[100vh] gap-1">
      <h2 className="font-semibold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="btn-outline text-center w-fit mt-2">
        Return Home
      </Link>
    </section>
  );
};

export default NotFound;
