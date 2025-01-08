import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";
import CustomButton from "../components/CustomButton";

export default function Home() {
  return (
    <>
      <main>
        <header className="Nav">
          <NavBar />
        </header>
        <section className="bg-mainImage bg-no-repeat bg-cover bg-bottom w-full h-screen items-center flex justify-center">
          <div className=" p-10">
            <h1 className="text-white text-6xl">HairStyle</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum porro assumenda laborum reprehenderit nulla doloribus
              debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
              magni, animi tempore excepturi dicta.
            </p>
            <CustomButton title={"Get Started"} click={undefined} />
          </div>
        </section>
        <section
          className="bg-SecondImage bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen"
          id="c1"
        >
          <div className="bg-secondary h-3/6 p-10 justify-center text-center items-center flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum porro assumenda laborum reprehenderit nulla doloribus
              debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
              magni, animi tempore excepturi dicta.
            </p>
          </div>
        </section>
        <section id="c2">
          <div className="ImgContainer">
            <img className="Img" src="/images/superCar(3).jpg" alt="" />
          </div>
          <div className="bg-secondary p-10 justify-center text-center items-center flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum porro assumenda laborum reprehenderit nulla doloribus
              debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
              magni, animi tempore excepturi dicta.
            </p>
          </div>
        </section>
        <section id="c3" className="flex-row flex w-full h-52 ">
          <div className="w-1/2 bg-FourthImage bg-no-repeat bg-cover bg-center" />
          <div className="bg-secondary p-10 justify-center text-center items-center flex w-1/2 flex-col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum porro assumenda laborum reprehenderit nulla doloribus
              debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
              magni, animi tempore excepturi dicta.
            </p>
            <CustomButton title={"Click"} click={undefined} />
          </div>
        </section>
        <div className="bg-secondary p-10" />
        <section id="c4" className="flex-row-reverse flex w-full ">
          <div className="w-1/2 bg-FifthImage bg-no-repeat bg-cover bg-center" />
          <div className="bg-secondary p-10 justify-center text-center items-center flex flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum porro assumenda laborum reprehenderit nulla doloribus
              debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
              magni, animi tempore excepturi dicta.
            </p>
          </div>
        </section>
        <footer className="bg-accent p-10 columns-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia
            ullam fuga debitis consequuntur tenetur. Porro nesciunt facilis
            sunt,
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia
            ullam fuga debitis consequuntur tenetur. Porro nesciunt facilis
            sunt,
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia
            ullam fuga debitis consequuntur tenetur. Porro nesciunt facilis
            sunt,
          </p>
        </footer>
      </main>
    </>
  );
}
