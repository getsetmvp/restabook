/**
 * This file will contain all constants related to the chefs
 */

interface ChefI {
  img: string;
  name: string;
  title: string;
  desc: string;
}

export const Chefs: ChefI[] = [
  {
    img: "/chef_1.jpg",
    name: "Kevin Gray",
    title: "Master chef in New York",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut mollitia expedita velit consectetur, aliquid, fugit unde ad quisquam officia, quas non! Placeat iusto laboriosam incidunt sequi repellendus exercitationem aut architecto minima laborum.",
  },
  {
    img: "/chef_2.jpg",
    name: "Austin Evon",
    title: "Master chef in Florida",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut mollitia expedita velit consectetur, aliquid, fugit unde ad quisquam officia, quas non! Placeat iusto laboriosam incidunt sequi repellendus exercitationem aut architecto minima laborum.",
  },
  {
    img: "/chef_3.jpg",
    name: "Taylor Roberts",
    title: "Master chef in Maiami",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut mollitia expedita velit consectetur, aliquid, fugit unde ad quisquam officia, quas non! Placeat iusto laboriosam incidunt sequi repellendus exercitationem aut architecto minima laborum.",
  },
];
