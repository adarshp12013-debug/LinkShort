import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="lg:h-[50vh] lg:grid grid-cols-1 lg:grid-cols-2">
        <article className="px-5 md:px-10 lg:px-25 py-3 flex flex-col items-center justify-center gap-3">
          <p className="text-xl font-semibold">The Best URL Shortener in THE MARKET</p>

          <p className="text-md">
            We are World's Most Straightforward URL Shortener. Most of the URL Shorteners will ask you to log in. But we understand your needs and hence we have created this URL shortener.
          </p>

          <div className='text-center flex items-center justify-center gap-2'>
            <Link href='/shorten'><button className='px-2 py-1 bg-blue-700 text-white rounded-lg shadow-3 cursor-pointer'>Try Now</button></Link>
            <Link href='/github'><button className='px-2 p-1 bg-blue-700 text-white rounded-lg shadow-3 cursor-pointer'>Github</button></Link>
          </div>
        </article>

        <article className="h-[70vh] w-screen lg:h-[50vh] lg:w-[50vw] justify-self-center flex justify-start relative">
          <Image className="mix-blend-darken" fill={true} src='/vector.jpg' alt='Image of an Vector' />
        </article>
      </section>
    </main>
  );
}
