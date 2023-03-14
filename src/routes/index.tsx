import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8 text-white">
        <a
          href="mailto:mojtaba.borzu69@gmail.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          mojtaba.borzu69@gmail.com
        </a>{" "}
      </p>
      {/* <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p> */}
    </main>
  );
}
