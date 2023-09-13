import { corn, cow, valueAdd, profit, community, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, bigShoe2, bigShoe3, bigShoe1,banner1, banner2,banner3 } from "@public/assets";

export const processCats = [
  {
    id: "cat-1",
    icon: corn,
    title: "Nutrition",
    
  },
  {
    id: "cat-2",
    icon: cow,
    title: "Genetics",
  },
  {
    id: "cat-3",
    icon: valueAdd,
    title: "Value Addition",
  },
  {
    id: "cat-4",
    icon: profit,
    title: "Wealth Creation",
  },
  {
    id: "cat-4",
    icon: community,
    title: "Community Impact",
  },
]

export const shoes = [
  {
      thumbnail: banner1,
      bigShoe:banner1,
  },
  {
      thumbnail: banner2,
      bigShoe:banner2,
  },
  {
      thumbnail: banner3,
      bigShoe: banner3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Partners' },
  { value: '30%', label: 'Deficiency Gap' },
  { value: '250k+', label: 'Litre Per Day ' },
];


export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "Mission", url: "/" },
        { title: "Core Values", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Resources", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Press/News", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "LinkedIn", url: "https://www.linkedin.com/in/goldmilk-dairies-a42748290/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "https://twitter.com/godlmilkdairies" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];