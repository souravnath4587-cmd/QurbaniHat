import Feature from "@/components/homepage/Feature";
import Hero from "@/components/homepage/Hero";
import QurbaniGuid from "@/components/homepage/QurbaniGuid";
import { ToastContainer } from "react-toastify";

const Home = async () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <Feature />
        <QurbaniGuid />
      </main>
      <ToastContainer />
    </>
  );
};

export default Home;
