import Image from "next/image";
import Logo from "./bfglogo.jpg";
import Animation from "../../public/banner.jpg"

export default function Home() {
  return (
    <>
    <div className="w-full h-full">
    <header className="w-full bg-white p-2 border-b-2 text-black">
      <div className="w-[100px] h-[calc(100vh - 500px)]">
      <Image src={Logo} alt="Logo" width="100%" height="100%" />
        </div></header>
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Image src={Animation} alt="My Banner" width= {600} height={500} />

    </main>
    </div>
    </>
  );
}
