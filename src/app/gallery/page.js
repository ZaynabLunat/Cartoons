import Image from "next/image";

export default function Reviews() {
  return (
    <>
      <div>
        <h3>Cartoon Gallery!</h3>
        <div className="row1">
          <Image src="/timothy.webp" width={150} height={150} alt="Timothy" />
          <Image src="/rooster.avif" width={150} height={150} alt="Rooster" />
          <Image
            src="/tomjerry.jpg"
            width={150}
            height={150}
            alt="Tom & Jerry"
          />
          <Image
            src="/spongebob.jpg"
            width={150}
            height={150}
            alt="Sponge Bob"
          />
          <Image src="/panda.jpeg" width={150} height={150} alt="Panda" />
          <Image src="/timothy.webp" width={150} height={150} alt="Timothy" />
          <Image src="/rooster.avif" width={150} height={150} alt="Rooster" />
          <Image
            src="/tomjerry.jpg"
            width={150}
            height={150}
            alt="Tom & Jerry"
          />
          <Image
            src="/spongebob.jpg"
            width={150}
            height={150}
            alt="Sponge Bob"
          />
        </div>
        <div className="row2">
          <Image src="/timothy.webp" width={150} height={150} alt="Timothy" />
          <Image src="/rooster.avif" width={150} height={150} alt="Rooster" />
          <Image
            src="/tomjerry.jpg"
            width={150}
            height={150}
            alt="Tom & Jerry"
          />
          <Image
            src="/spongebob.jpg"
            width={150}
            height={150}
            alt="Sponge Bob"
          />
          <Image src="/panda.jpeg" width={150} height={150} alt="Panda" />
          <Image src="/timothy.webp" width={150} height={150} alt="Timothy" />
          <Image src="/rooster.avif" width={150} height={150} alt="Rooster" />
          <Image
            src="/tomjerry.jpg"
            width={150}
            height={150}
            alt="Tom & Jerry"
          />
          <Image
            src="/spongebob.jpg"
            width={150}
            height={150}
            alt="Sponge Bob"
          />{" "}
        </div>
      </div>
    </>
  );
}
