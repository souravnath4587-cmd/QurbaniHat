import Extra from "@/components/homepage/Extra";
import Feature from "@/components/homepage/Feature";
import Hero from "@/components/homepage/Hero";

const Home = async () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <Feature />
        <Extra />
      </main>
    </>
  );
};

export default Home;
