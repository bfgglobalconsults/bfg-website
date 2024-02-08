import Image from "next/image";
import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

export default function Home() {
  return (
    <>
    {/* <div className="w-full h-full">
    <header className="w-full bg-white p-2 border-b-2 text-black">
      <div className="w-[100px] h-[calc(100vh - 500px)]">
      <Image src={Logo} alt="Logo" width="100%" height="100%" />
        </div></header>
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Image src={Animation} alt="My Banner" width="100%" height="100%" className="object-fit w-full h-full" />

    </main>
    
    </div> */}
    <div className="relative w-screen h-screen">
    <Image src={Animation} alt="banner" className="w-[100%] h-[100%] object-fit" />
					<div>
						<div className="absolute top-0 left-10">
							<Image src={Logo} alt="logo" className="w-32 h-32" />
						</div>

						<div className="absolute inset-x-0 bottom-10 text-center">
							<p className="text-black text-4xl font-bold">Scheduled Maintenance in Progress...</p>
							<p className="text-black text-2xl italic">We will be back soon!!!</p>
						</div>
					</div>
				</div>
    </>
  );
}
