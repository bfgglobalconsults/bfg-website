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
            link: "solution/research-analytics"
        },
        {
            id: 2,
            label: "Business Strategy & Operations",
            link: "solution/business"
        },
        {
            id: 3,
            label: "Training & Development",
            link: "solution/training-development"
        },
        {
            id: 4,
            label: "Information Technology",
            link: "solution/it"
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