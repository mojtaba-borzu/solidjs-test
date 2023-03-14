import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function carousel() {
  return (
    <main class="text-center mx-auto text-white p-4">
      <div class="container">
        <div class="carousel">
          <div class="image">
            <span>Simple</span>
          </div>
          <div class="image">
            <span>Carousel</span>
          </div>
          <div class="image">
            <span>Animation</span>
          </div>
          <div class="image">
            <span>With</span>
          </div>
          <div class="image">
            <span>Beautiful</span>
          </div>
          <div class="image">
            <span>Landscapes</span>
          </div>
          <div class="image">
            <span>Follow</span>
          </div>
          <div class="image">
            <span>Like</span>
          </div>
          <div class="image">
            <span>Comment</span>
          </div>
        </div>
      </div>
    </main>
  );
}
