import React from "react";
import Auditor from "../../../public/assets/internal-auditor.png";
import OfficeAdmin from "../../../public/assets/office-admin.png";
import ManagingDirector from "../../../public/assets/festus-md.png";
import SocialMedia from "../../../public/assets/social-media.png";
import HeadAdmin from "../../../public/assets/admin-lead.png";
import BusinessAnalyst from "../../../public/assets/business-analyst-new.png";
import DigitalMarketer from "../../../public/assets/digital-marketer.png";
import HeadService from "../../../public/assets/mr-peter.png";
import HeadGrowth from "../../../public/assets/moses.png";
import HeadFinance from "../../../public/assets/finance-lead.png";
import TrainingAnalyst from "../../../public/assets/training-analyst.png";
import AccountingManager from "../../../public/assets/accounting-manager.png";
import HeadBusiness from "../../../public/assets/ifeoma.png";
import HeadResearch from "../../../public/assets/kenneth.png";
import Elizabeth from "../../../public/assets/elizabeth-mary.png";
import DavidBradford from "../../../public/assets/david-bradford.png";
import Happy from "../../../public/assets/happiness_adama.png";
import Jeremiah from "../../../public/assets/jesunifemi.png";
import Ayobami from "../../../public/assets/ayobami-picture.png";
import Simon from "../../../public/assets/simon-adeh.png";
import Abubakar from "../../../public/assets/abubakar-sadiq.png";
import CompanySecretary from "../../../public/assets/secretary-md.png";
import Avatar from "../../../public/assets/new-avatar.png";
import Banner from "../../../public/assets/team-image-banner.jpg";
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
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Meet the dedicated team - The passionate builders, creators and visionaries behind everything we do.
           
          </p>
        </div>

        {/* Banner image section */}
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-top">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover object-top rounded-3xl "
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
                  <p className="text-[#E45F11]">Managing Partner / CEO</p>
                  <Link href="/team/managing-partner">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                  <p className="text-[#E45F11]">Deputy Managing Partner/COO</p>
                  <Link href="/team/deputy-managing-partner">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                  <p className="text-[#E45F11]">
                    Head, Projects & Service Delivery
                  </p>
                  <Link href="/team/head-service-delivery">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* Fourth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={HeadAdmin}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Adebayo Adeniyi</h3>
                  <p className="text-[#E45F11]">Head, Administration</p>
                  <Link href="/team/head-administration">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Fifth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={HeadGrowth}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Sunday Moses</h3>
                  <p className="text-[#E45F11]">Head, Marketing & Growth</p>
                  <Link href="/team/head-marketing">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* sixth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={HeadFinance}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Amoto Seriki</h3>
                  <p className="text-[#E45F11]">Head, Finance</p>
                  <Link href="/team/head-finance">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                  <h3 className="font-semibold text-lg">
                    Elizabeth-Mary N. Okeke
                  </h3>
                  <p className="text-[#E45F11]">
                    Executive Assistant - Service Delivery and People Management
                  </p>
                  <Link href="/team/executive-assistant">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                  <p className="text-[#E45F11]">
                    Senior Research and Data Analyst
                  </p>
                  <Link href="/team/senior-research">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                  <p className="text-[#E45F11]">
                    Senior Business Analyst - Strategy and Operations
                    Transformation
                  </p>
                  <Link href="/team/head-business">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* Third team */}

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
                  <p className="text-[#E45F11]">
                    Senior Training and Development Analyst
                  </p>
                  <Link href="/team/senior-training">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Fourth Team */}
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
                  <p className="text-[#E45F11]">
                    Senior Software Developer/Technology Analyst
                  </p>
                  <Link href="/team/senior-software">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Fifth team */}
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
                  <p className="text-[#E45F11]">
                    Junior Research and Data Analyst
                  </p>
                  <Link href="/team/data-analyst">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* Sixth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={BusinessAnalyst}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">
                    Nkeiruka Vivian Mordi
                  </h3>
                  <p className="text-[#E45F11]">
                    Business Analyst – System Intelligence and Digital
                    Transformation
                  </p>
                  <Link href="/team/business-analyst">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* Sixth team */}
              

              {/* seventh team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={TrainingAnalyst}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Justina Aderinluwo</h3>
                  <p className="text-[#E45F11]">
                    Training and Development Analyst
                  </p>
                  <Link href="/team/training-analyst">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* eight team */}
              {/* <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Jeremiah}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">
                    Jesunifemi Jeremiah Oluwafemi
                  </h3>
                  <p className="text-[#E45F11]">Product Designer - UI/UX</p>
                  <Link href="/team/product-designer">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div> */}

              {/* ninth team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Ayobami}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">
                    Ayobami Tayo
                  </h3>
                  <p className="text-[#E45F11]">Product Designer - UI/UX </p>
                  <Link href="/team/product-designer-II">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
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

              {/* first team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={DigitalMarketer}
                    alt="marketer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Perpetual Amanyi</h3>
                  <p className="text-[#E45F11]">Digital Marketing Executive</p>
                  <Link href="/team/digital-marketer">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* second person */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={SocialMedia}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Oladipupo Taiwo</h3>
                  <p className="text-[#E45F11]">
                    Digital Media and Content Strategist
                  </p>
                  <Link href="/team/content-creator">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                    src={AccountingManager}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Olawale Adunbi</h3>
                  <p className="text-[#E45F11]">Accounting Manager</p>
                  <Link href="/team/accounting-manager">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={Auditor}
                    alt="research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Theophilus Fakiyesi</h3>
                  <p className="text-[#E45F11]">
                    Internal Audit and Risk Manager
                  </p>
                  <Link href="/team/auditor">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
                  <h3 className="font-semibold text-lg">
                    Abubakar Sultan Faisal
                  </h3>
                  <p className="text-[#E45F11]">Systems Administrator</p>
                  <Link href="/team/system-adminstrator">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* second team */}
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={OfficeAdmin}
                    alt="research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Ayomide Oyabunmi</h3>
                  <p className="text-[#E45F11]">Office Administrator</p>
                  <Link href="/team/office-administrator">
                    <button className="text-[#999] text-cursor text-md underline hover:text-black">
                      Read More
                    </button>
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
