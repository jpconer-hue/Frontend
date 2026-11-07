import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-5">

        <h1 className="text-4xl font-bold">
          Welcome to My Portfolio!
        </h1>

        <h2 className="text-2xl font-semibold">
          Hello, I am an IT Student.
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          An aspiring Cybersecurity Analyst who is
          continuously learning, improving my skills,
          and adapting to the fast-changing digital world.
        </p>

        <Link
          href="/about"
          className="inline-block rounded-md bg-primary px-5 py-2 text-primary-foreground"
        >
          About Me
        </Link>

      </div>
    </main>
  );
}