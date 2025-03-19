import React from "react";
import ManagingDirector from "../../../public/assets/festus-md.png";
import HeadService from "../../../public/assets/mr-peter.png";
import HeadGrowth from "../../../public/assets/moses.png";
import HeadBusiness from "../../../public/assets/ifeoma.png";
import HeadResearch from "../../../public/assets/kenneth.png";
import Elizabeth from "../../../public/assets/elizabeth-mary.png";
import DavidBradford from "../../../public/assets/david-bradford.png";
import Happy from "../../../public/assets/happiness_adama.png";
import Jeremiah from "../../../public/assets/jesunifemi.png";
import Simon from "../../../public/assets/simon-adeh.png";
import Abubakar from "../../../public/assets/abubakar-sadiq.png";
import CompanySecretary from "../../../public/assets/secretary-md.png";
import Avatar from "../../../public/assets/new-avatar.png";
import Banner from "../../../public/assets/team-image.jpg";
import Image from "next/image";
import OurStand from "@/components/OurStand";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        {/* Header section remains the same */}
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Team
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Meet the brains.
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Meet the dedicated team of people who make our business what it is
            today. They represent our primary point of contact with our target
            market & audience.
          </p>
        </div>

        {/* Banner image section */}
        <div className="relative w-full h-[400px] bg-cover bg-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Team description */}
        <div className="py-[30px]">
          <div className="w-full my-4">
            <p className="text-lg text-[#656565] my-3">
              Our strength lies in our diverse & dynamic team. From seasoned
              industry veterans to fresh perspectives, we unite under a shared
              commitment to excellence. With a passion for innovation & a
              dedication to client success, each member brings a unique set of
              skills & experiences to the table.
            </p>
          </div>
        </div>

        {/* Team members section */}
        <div className="my-8">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Team Members
          </span>

          {/* Leadership section */}
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="my-4 text-[#333] font-bold text-4xl md:text-3xl lg:text-4xl mb-8">
              Management Team
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team member card */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={ManagingDirector}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Festus BELLO, mba.</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Managing Partner / CEO
                  </p>
                  <Link href="/team/managing-partner">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
               
              </div>
              {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={CompanySecretary}
                    alt="secretary"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Aina A. Oyefesobi</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Deputy Managing Partner/COO
                  </p>
                   <Link href="/team/deputy-managing-partner">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
              {/* Third team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={HeadService}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Peter Chukwuemeka</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Head, Projects & Service Delivery
                  </p>
                   <Link href="/team/head-service-delivery">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
              {/* Fourth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Sarah James</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Head, Administration
                  </p>
                   <Link href="/team/head-administration">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>

              {/* Fifth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Kunle Afolabi</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Head, Marketing & Growth
                  </p>
                   <Link href="/team/head-marketing">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>

              {/* sixth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Shehu Abdullahi</h3>
                  <p className="text-[#E45F11] font-semibold">Head, Finance</p>
                  <Link href="/team/head-finance">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>

              {/* seventh team */}
               <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Elizabeth}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Elizabeth-Mary N. Okeke</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Executive Assistant - Client Relations & People Management
                  </p>
                  <Link href="/team/executive-assistant">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />

          {/* Product section */}
        <div className="my-8">
         
          
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="my-4 text-[#333] font-bold text-4xl md:text-3xl lg:text-4xl mb-8">
              Product Team
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team member card */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={HeadResearch}
                    alt="research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Kenneth Idanwekhai</h3>
                  <p className="text-[#E45F11] font-semibold">
                   Senior Research and Data Analyst
                  </p>
                  <Link href="/team/senior-research">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
              {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={HeadBusiness}
                    alt="business"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Ifeoma Ezeamama</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Senior Business Analyst - Strategy and Operations Transformation 
                  </p>
                  <Link href="/team/head-business">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
              {/* Third team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={DavidBradford}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">David Uko Bradford</h3>
                  <p className="text-[#E45F11] font-semibold">
                   Senior Software Developer/Technology Analyst
                  </p>
                  <Link href="/team/senior-software">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>

              {/* Fourth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Happy}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Happiness C. Adama</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Senior Training and Development Analyst 
                  </p>
                  <Link href="/team/senior-training">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
             

              {/* Fifth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Jeremiah}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Jesunifemi Jeremiah Oluwafemi</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Product Designer / Developer
                  </p>
                  <Link href="/team/product-designer">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>

              {/* sixth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Simon}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Simon Adeh Aba</h3>
                  <p className="text-[#E45F11] font-semibold">Junior Research and Data Analyst</p>
                  <Link href="/team/data-analyst">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
               {/* seventh team */}
               <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Godfrey Samuel</h3>
                  <p className="text-[#E45F11] font-semibold">Software Developer</p>
                  <Link href="/team/software-developer">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
              {/* seventh team */}
               <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Juliet Dunkwu</h3>
                  <p className="text-[#E45F11] font-semibold">Training and Development Analyst</p>
                <Link href="/team/training-analyst">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
                {/* seventh team */}
               <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Kate Abengowe</h3>
                  <p className="text-[#E45F11] font-semibold">Business Analyst – Systems and Digital Intelligence</p>
               
                </div>
              </div>
                {/* seventh team */}
               <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">John Ogbe</h3>
                  <p className="text-[#E45F11] font-semibold">Business Analyst</p>
                 <Link href="/team/business-analyst">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
               {/* seventh team */}
               <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Emmanuel Akinbade</h3>
                  <p className="text-[#E45F11] font-semibold">Associate, Research & Analytics</p>
                </div>
              </div>
               {/* seventh team */}
               
              
            </div>
          </div>
        </div>


        <hr className="my-8" />

        {/* Marketing Team */}
        <div className="my-8">
         
          
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="my-4 text-[#333] font-bold text-4xl md:text-3xl lg:text-4xl mb-8">
              Marketing Team
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team member card */}
              
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Chioma Henry</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Sales & Marketing Executive
                  </p>
                   <Link href="/team/sales-marketing-executive">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
               {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Alex James Odeh</h3>
                  <p className="text-[#E45F11] font-semibold">
                   Digital Marketer
                  </p>
                   <Link href="/team/digital-marketer">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
             
             
              
              
            </div>
          </div>
        </div>

        <hr className="my-8" />
        {/* Finance Team */}
        <div className="my-8">
         
          
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="my-4 text-[#333] font-bold text-4xl md:text-3xl lg:text-4xl mb-8">
              Finance Team
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team member card */}
              
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Solomon Aja</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Accounting Manager
                  </p>
                   <Link href="/team/accounting-manager">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
               {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Gloria Ebube</h3>
                  <p className="text-[#E45F11] font-semibold">
                   Auditor
                  </p>
                   <Link href="/team/auditor">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
             
             
              
              
            </div>
          </div>
        </div>

        <hr className="my-8" />
        {/* Administration Team */}
        <div className="my-8">
         
          
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="my-4 text-[#333] font-bold text-4xl md:text-3xl lg:text-4xl mb-8">
              Administrative Team
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team member card */}
              
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Abubakar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Abubakar Sultan Faisal</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Systems Administrator
                  </p>
                   <Link href="/team/system-administrator">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
               {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Avatar}
                    alt="research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Josephine Isai</h3>
                  <p className="text-[#E45F11] font-semibold">
                   Office Administrator
                  </p>
                   <Link href="/team/office-administrator">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">Read More</button>
                     </Link>
                </div>
              </div>
             
             
              
              
            </div>
          </div>
        </div>
        
                        <hr className="my-8" />


        

        <div className="my-10">
          <OurStand />
        </div>
      </div>
    </>
  );
};

export default Page;
