import  { AboutComponent }  from "@/components/navigation-components/AboutComponent";
import IndustryComponent from "@/components/navigation-components/IndustryComponent";
import { InsightComponent } from "@/components/navigation-components/InsightComponent";
import ProductComponent from "@/components/navigation-components/ProductComponent";
import { ProgramComponent } from "@/components/navigation-components/ProgramComponent";
import SolutionsComponent from "@/components/navigation-components/SolutionsComponent";

export const navigation_links = [
  {
    id: 1,
    label: "Solutions",
    link: "solutions",
    component: <SolutionsComponent />,
    componentName:"solutions",
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Technology & Software",
        link: "/solutions/information-technology",
      },
      {
        id: 2,
        label: "Research & Analytics",
        link: "/solutions/research-analytics",
      },
      {
        id: 3,
        label: "Business Strategy & Operations",
        link: "/solutions/business-strategy",
      },
      {
        id: 4,
        label: "Training & Development",
        link: "/solutions/training-development",
      }
    ],
  },

  {
    id: 2,
    label: "Industry",
    link: "industry",
    component: <IndustryComponent />,
    componentName:"industry",
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Projects Executed",
        link: "portfolio/projects",
      },
    ],
  },
  {
    id: 3,
    label: "SaaS Products",
    link: "product",
    component: <ProductComponent />,
    componentName:"product ",
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Product Item",
        link: "product/product-item",
      },
      {
        id: 2,
        label: "Product bfg",
        link: "product/product-bfg",
      },
    ],
  },
  {
    id: 4,
    label: "Program",
    link: "program",
    component: <ProgramComponent />,
    componentName:"program",
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Product Item",
        link: "product/product-item",
      },
      {
        id: 2,
        label: "Product bfg",
        link: "product/product-bfg",
      },
    ],
  },
  {
    id: 5,
    label: "Resources",
    link: "insight",
    component: <InsightComponent />,
    componentName:"insight",
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Product Item",
        link: "product/product-item",
      },
      {
        id: 2,
        label: "Product bfg",
        link: "product/product-bfg",
      },
    ],
  },
  {
    id: 6,
    label: "About us",
    link: "about",
    component: <AboutComponent />,
    componentName:"about",
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Our Team",
        link: "about/about-team",
      },
      {
        id: 2,
        label: "Our Story",
        link: "about/bfg-story",
      },
    ],
  },
  // {
  //   id: 6,
  //   label: "Contact",
  //   link: "contact",
  //   dropdown: false,
  // },
];
