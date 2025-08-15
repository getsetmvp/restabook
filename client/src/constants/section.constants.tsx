/**
 * This file will contain all constants related to the page
 */

interface SectionI {
  Text?: string;
  Title: string;
  Variant?: "black" | "white";
  Position?: "left" | "middle" | "right";
}

export const AboutSection: SectionI = {
  Text: "Our story",
  Title: "Few words about us",
  Variant: "black",
  Position: "left",
};

export const ReservationSection: SectionI = {
  Text: "Call for Reservations",
  Title: "Opening Hours",
  Variant: "white",
  Position: "middle",
};

export const ServiceSection: SectionI = {
  Text: "Why people choose us",
  Title: "Prepare for first-class service",
  Variant: "black",
  Position: "middle",
};

export const ChefSection: SectionI = {
  Text: "Our awesome team",
  Title: "Meet Our Chefs",
  Variant: "black",
  Position: "middle",
};

export const EventsSection: SectionI = {
  Text: "Book a table",
  Title: "Upcoming Events",
  Variant: "white",
  Position: "middle",
};

export const ReviewSection: SectionI = {
  Text: "What said about use",
  Title: "Customer Reviews",
  Variant: "black",
  Position: "middle",
};

export const MenuSection: SectionI = {
  Text: "Special menu offers",
  Title: "Enjoy Restaurants Specialities",
  Variant: "white",
  Position: "middle",
};

export const OurPromoSection: SectionI = {
  Text: "Our promo video",
  Title:
    "Get ready to start your exciting journey.\n Our restaurant will lead you through the amazing food world.",
  Variant: "white",
  Position: "middle",
};

export const RestaurantNumbersSection = [
  {
    number: 254,
    title: "New Visitors Every Week",
  },
  {
    number: 12168,
    title: "Happy Customers Every Year",
  },
  {
    number: 172,
    title: "Won Awards",
  },
  {
    number: 732,
    title: "Weekly Deliveries",
  },
];

export const ReservationPopupSection: SectionI = {
  Text: "Don't forget to book a table",
  Title: "Table Reservations",
  Variant: "black",
  Position: "middle",
};
