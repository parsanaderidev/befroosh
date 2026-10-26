import React from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Is using Befroosh safe for my Instagram account?",
    answer:
      "Yes. Befroosh connects exclusively through the official Meta-approved Instagram Graph API and never requires your Instagram password. There is zero risk of account restriction.",
  },
  {
    id: "2",
    question: "How long does setup take?",
    answer:
      "Setup takes less than 5 minutes. You can connect your Instagram account and launch your first smart DM automation immediately.",
  },
  {
    id: "3",
    question: "Do I need to provide my Instagram password?",
    answer:
      "No. Account connection is authenticated directly on Instagram and Facebook using official Meta OAuth. Befroosh never accesses or stores your password.",
  },
  {
    id: "4",
    question: "Is Befroosh only for e-commerce stores?",
    answer:
      "No. Online shops, real estate agencies, course creators, clinics, consultants, and service providers all use Befroosh to automate inquiries and capture leads.",
  },
  {
    id: "5",
    question: "Will followers know the replies are automated?",
    answer:
      "No. Messages feel natural, immediate, and personalized. You can customize text, buttons, and conversation pathways to perfectly match your brand voice.",
  },
  {
    id: "6",
    question: "Can I collect customer phone numbers in direct messages?",
    answer:
      "Yes. Befroosh includes automated form builders and lead capture flows that ask for and validate phone numbers and contact details during conversation.",
  },
  {
    id: "7",
    question: "What is the follower-only unlocking feature?",
    answer:
      "You can require users to follow your page before receiving price catalogs, links, or special discount codes, dramatically growing your follower count.",
  },
  {
    id: "8",
    question: "What happens if I need help setting up?",
    answer:
      "Our support team is available via direct phone and Telegram to provide personalized onboarding and optimization advice for your business.",
  },
  {
    id: "9",
    question: "Is there a free trial?",
    answer:
      "Yes! Every plan includes a 7-day free trial so you can experience automated sales before paying anything.",
  },
];
