import { useAmp } from "next/amp";
import Image from "next/image";

export const config = { amp: "hybrid" };

export default function Hybrid() {
  const isAmp = useAmp();

  return (
    <div>
      <h1>Hybrid AMP Page</h1>

      {isAmp ? (
        <>
          <h1>amp page</h1>
          <amp-img
            alt="A view of the sea"
            src="/chiangmai.jpeg"
            width="640"
            height="360"
          ></amp-img>
        </>
      ) : (
        <Image
          alt="A view of the sea"
          src="/chiangmai.jpeg"
          width="640"
          height="360"
        />
      )}
    </div>
  );
}
