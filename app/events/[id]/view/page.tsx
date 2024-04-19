import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <Image
          src={"https://cdn.joinnus.com/files/2024/03/nUb6w0lM3ZfzWiU.jpg"}
          height={500}
          width={500}
          className="w-full"
          alt="image-swiper"
        />
      </section>
      <section>cuerpo</section>
    </main>
  );
}
