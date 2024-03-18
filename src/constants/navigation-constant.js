import  { AboutComponent }  from "@/components/navigation-components/AboutComponent";
import IndustryComponent from "@/components/navigation-components/IndustryComponent";
import ProductComponent from "@/components/navigation-components/ProductComponent";
import SolutionsComponent from "@/components/navigation-components/SolutionsComponent";

export const navigation_links = [
  {
    id: 1,
    label: "Solutions",
    link: "solutions",
    component: <SolutionsComponent />,
    dropdown: true,
    dropdown_item: [
      {
        id: 1,
        label: "Research & Analytics",
        link: "/solutions/research-analytics",
      },
      {
        id: 2,
        label: "Business Strategy & Operations",
        link: "/solutions/business-strategy",
      },
      {
        id: 3,
        label: "Training & Development",
        link: "/solutions/training-development",
      },
      {
        id: 4,
        label: "Information Technology",
        link: "/solutions/information-technology",
      },
    ],
  },

  {
    id: 2,
    label: "Industry",
    link: "industry",
    component: <IndustryComponent />,
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
    label: "Product",
    link: "product",
    component: <ProductComponent />,
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
    label: "About us",
    link: "about",
    component: <AboutComponent />,
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
