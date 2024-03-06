export const navigation_links = [
    {
      id: 1,
      label: "Home",
      link: "/",
      dropdown: false,
    },
    {
      id: 2,
      label: "About",
      link: "about",
      dropdown: true,
      dropdown_item: [
        {
            id: 1,
            label: "Our Team",
            link: "about/about-team"
        },
        {
            id: 2,
            label: "Our Story",
            link: "about/bfg-story"
        },
      ],

    },
    {
      id: 3,
      label: "Portfolio",
      link: "portfolio",
      dropdown: true,
      dropdown_item: [
        {
            id: 1,
            label: "Projects Executed",
            link: "portfolio/projects"
        },
       
      ],

    },
    {
      id: 4,
      label: "Product",
      link: "product",
      dropdown: true,
      dropdown_item: [
        {
            id: 1,
            label: "Product Item",
            link: "product/product-item"
        },
        {
            id: 2,
            label: "Product bfg",
            link: "product/product-bfg"
        },
      ],

    },
    {
      id: 5,
      label: "Program",
      link: "program",
      dropdown: true,
      dropdown_item: [
        {
            id: 1,
            label: "Product Item",
            link: "product/product-item"
        },
        {
            id: 2,
            label: "Product bfg",
            link: "product/product-bfg"
        },
      ],

    },
    {
      id: 6,
      label: "Solutions",
      link: "solutions",
      dropdown: true,
      dropdown_item: [
        {
            id: 1,
            label: "Research & Analytics",
            link: "/solutions/research-analytics"
        },
        {
            id: 2,
            label: "Business Strategy & Operations",
            link: "/solutions/business-strategy"
        },
        {
            id: 3,
            label: "Training & Development",
            link: "/solutions/training-development"
        },
        {
            id: 4,
            label: "Information Technology",
            link: "/solutions/information-technology"
        },
      ],

    },
    {
      id: 7,
      label: "Contact",
      link: "contact",
      dropdown: false,

    },
  ];