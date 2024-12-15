import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Contact from "@/components/Home/Contact/Contact";
import OurClient from "@/components/Home/OurClient/OurClient";
import Products from "@/components/Home/Products/Products";



export default function Home() {
  return (
    <section>
      <title>Ema Enterprise | Home</title>
      <meta name="description" content="This is the test page description" />
      <section className="my-10">
        <Banner />
      </section>
      <section className="my-10">
        <About />
      </section>
      <section className="my-10">
        <Products />
      </section>
      <section className="my-10">
        <OurClient />
      </section>
      <section className="my-10">
        <Contact />
      </section>
    </section>
  );
}
