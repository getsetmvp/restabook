/**
 * This file will contain all constants related to the cards
 */

import { IoFishOutline } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

interface CardI {
  img: string;
  title: string;
  subtitle: string;
  number: string;
  icon: any;
  text: string;
}

export const ServiceCards: CardI[] = [
  {
    img: "/services/1.jpg",
    title: "Daily New Fresh Menus",
    subtitle: "Start Eating Better",
    number: "01.",
    icon: <IoFishOutline />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veliure voluptatum doloribus! Placeat, sint facilis?",
  },
  {
    img: "/services/2.jpg",
    title: "Fresh Ingredient, Tasty Meals",
    subtitle: "Quality is the heat",
    number: "02.",
    icon: <FaCarrot />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veliure voluptatum doloribus! Placeat, sint facilis?",
  },
  {
    img: "/services/3.jpg",
    title: "Creative & Talented Chefs",
    subtitle: "Hot and ready to serve",
    number: "03.",
    icon: <GiKnifeFork />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veliure voluptatum doloribus! Placeat, sint facilis?",
  },
];
