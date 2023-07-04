import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../Lottie-animation/cart-animation.json";

export function Home() {
  return (
    <div className="w-full bg-white md:px-16 px-4">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-center"
        id="about"
      >
        <div className="flex flex-col justify-center">
          <p className="md:text-2xl font-bold text-white bg-black p-3 rounded-lg">
            Store with licensed equipment
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-13 py-10">
            Relax and trust the choise of a thousand satisfied customers
          </h1>
          <p className="md:text-2xl font-medium md:mt-5 rounded-xl border-solid border-2 border-black p-4">
            Welcome to our website, your ultimate destination for all your
            electronic technology needs! We are passionate about providing you
            with the latest and greatest electronic devices that will enhance
            your everyday life.<br></br>
            At "Shopping Cart", we strive to offer a wide range of high-quality
            electronic products at competitive prices. Whether you're in search
            of cutting-edge smartphones, sleek laptops, immersive gaming
            consoles, or innovative smart home devices, we've got you covered.
          </p>
          <Link to="/store">
            <button className="btn my-10 mx-auto md:py-4 py-3 text-[#cd4242]">
              Start Shopping
            </button>
          </Link>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            className="md:w-[600px] md:h-[550px] w-[250px] h-[200px] mx-auto mt-36"
          />
        </div>
      </div>
    </div>
  );
}
