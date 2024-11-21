import Image from "next/image";

export default function ResoureCard() {
  return (
    <div className="  h-[230px] w-[400px] bg-neutral-700 rounded-md">
      <div className="p-4 flex flex-row  gap-3 w-full justify-between  ">
        <div className="flex flex-row items-center gap-2">
          <Image src={"/lxsh.jpg"} alt="#" width={50} height={50} />
          <h1 className="font-bold">Tech Stack</h1>
        </div>
        <div className="flex flex-row   ">
          <div className="h-10 w-10 bg-red-200"></div>
          <div className="h-10 w-10 bg-blue-300"></div>
        </div>
      </div>
      <div className="px-3 text-neutral-400">
        Description :
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        </div>
        <div className="mt-5 ">
          <button className="px-6 py-2 w-full text-center bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm">
            click to visit
          </button>
        </div>
      </div>
    </div>
  );
}
