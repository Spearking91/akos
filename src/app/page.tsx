import NavBar from "../components/NavBar";
import CustomButton from "../components/CustomButton";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <>
      <main>
        <header className="Nav">
          <NavBar />
        </header>
        <section className="bg-mainImage bg-no-repeat bg-cover bg-bottom w-full h-screen items-center justify-end flex">
          <div className=" p-5 w-1/2">
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
          className="bg-secondary h-auto w-full justify-center items-center p-10 text-center flex flex-row"
          id="c1"
        >
          <div className=" h-96 flex flex-row m-5">
            <div className="flex-1 border-2 border-amber-300">
              <img
                className="object-cover w-full h-full"
                src="/images/superCar(5).jpg"
                alt=""
              />
            </div>
            <div className="flex-1 border-2 border-blue-500">
              <img
                className="object-cover w-full h-full"
                src="/images/superCar(8).jpg"
                alt=""
              />
            </div>
            <div className="flex-1 border-2 border-orange-400">
              <img
                className="object-cover w-full h-full"
                src="/images/superCar(9).jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-primary">Home</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum porro assumenda laborum reprehenderit nulla doloribus
              debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
              magni, animi tempore excepturi dicta.
            </p>
          </div>
        </section>

        <section id="c2" className="flex-row-reverse flex w-full h-auto">
          <div className="w-1/2 ">
            <Slide
              time={6}
              slides={[
                { src: "/images/superCar(3).jpg" },
                { src: "/images/superCar(4).jpg" },
                { src: "/images/superCar(2).jpg" },
              ]}
            />
          </div>
          <div className="bg-secondary p-10 justify-center text-center items-center flex w-1/2 flex-col">
            <div>
              <h1 className="text-2xl text-primary">Contact</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum porro assumenda laborum reprehenderit nulla doloribus
                debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
                magni, animi tempore excepturi dicta.
              </p>
            </div>
            <CustomButton title={"Click"} click={undefined} />
          </div>
        </section>

        <div className="bg-secondary p-10" />

        <section id="c3" className="flex-row flex w-full h-auto ">
          <div className="w-1/2 ">
            <Slide
              time={5}
              slides={[
                { src: "/images/superCar(1).jpg" },
                { src: "/images/superCar(8).jpg" },
                { src: "/images/superCar(9).jpg" },
              ]}
            />
          </div>
          <div className="bg-secondary p-10 justify-center text-center items-center flex w-1/2 flex-col">
            <div>
              <h1 className="text-2xl text-primary">About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum porro assumenda laborum reprehenderit nulla doloribus
                debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
                magni, animi tempore excepturi dicta.
              </p>
            </div>
            <CustomButton title={"Click"} click={undefined} />
          </div>
        </section>
        <div className="bg-secondary p-10" />
        <section id="c4" className="flex-row-reverse flex w-full h-auto">
          <div className="w-1/2 ">
            <Slide
              time={3}
              slides={[
                { src: "/images/superCar(9).jpg" },
                { src: "/images/superCar(2).jpg" },
                { src: "/images/superCar(8).jpg" },
              ]}
            />
          </div>
          <div className="bg-secondary p-10 justify-center text-center items-center flex flex-1">
            <div>
              <h1 className="text-2xl text-primary">Help</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ipsum porro assumenda laborum reprehenderit nulla doloribus
                debitis qui nemo optio fugiat voluptatum eveniet deleniti, aut
                magni, animi tempore excepturi dicta.
              </p>
            </div>
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
