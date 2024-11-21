import Button from "@/components/Button";
import designExmpale1 from "@/assets/images/design-example-1.png"
import designExmpale2 from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";
import CoolButton from "@/components/CoolButton";
export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip ">
            <div className="container relative ">
                <div className="absolute -z-10  -left-32 top-16 hidden lg:block" >
                    <Image className="" src={designExmpale1} alt="design example 1"/>
                </div>
                <div className="absolute -z-10 -right-64 -top-16 hidden lg:block">
                    <Image className="" src={designExmpale2} alt="design exmaple 2"/>
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name={"Amaira"} />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
        <Pointer name={"Lxsh"} color="red"/>
                </div>``
                <div className="flex justify-center">
                    <div
                        className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full
                text-neutral-950 font-semibold "
                    >
                        ✨ $7.5 M seed round raised
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center flex-col">

            <h1 className="text-6xl  lg:text-8xl max-w-5xl text font-medium text-center  md:text-7xl mt-6">Build Connections Share Knowledge</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto ">
                the platform to connect and collaborate with yor fellow
                developers and connect with better community.
            </p>
            </div>
            <div className="flex border px-3 bg-neutral-900 border-white/15 rounded-full p-2 mt-8 max-w-80 justify-center mx-auto ">
                <CoolButton >Let's Connect you nerd</CoolButton>
            </div>
        </section>
    );
}
