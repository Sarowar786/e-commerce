import notfound_image from '../assets/404-page-not-found-illustration-2048x998-yjzeuy4v.png'
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const NotFoundPage = () => {
  return (
    <Container className="flex flex-col gap-2 items-center justify-center py-10">
      {/* <Image src={notFoundImage} alt="notFoundImage" className="w-60" /> */}
      <Image src={notfound_image} alt='not found image ' width={700} />
      <p className="text-2xl font-semibold">Oops! Page not found</p>
      <p className="text-sm text-gray-500 max-w-80 text-center">
        Whoops, this is embarrassing. Looks like the page you were looking for
        was not found.
      </p>
      <Link href="/">Back to Home</Link>
    </Container>
  );
};

export default NotFoundPage;