
import { Suspense } from "react";
import SlowComponent from "./SlowComponent";
export default function Home() {
  return (
    <div>
      <h2>Hello Next js Streaming </h2>
      <p>This is a Test app</p>
      <Suspense fallback = {<p>Loading .....</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
