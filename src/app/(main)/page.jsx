import Feature from "@/components/homepage/Feature";
import Hero from "@/components/homepage/Hero";
import QurbaniGuid from "@/components/homepage/QurbaniGuid";

const Home = async () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <Feature />
        <QurbaniGuid />
      </main>
    </>
  );
};

export default Home;
