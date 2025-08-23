import FAQSection from "../../common/FAQSection/FAQSection";

const AS_TABS = ["All", "Ordering", "Shipping", "Returns", "Customer Support"];
const AS_FAQ_DATA = [
  {
    category: "Ordering",
    q: "Can I modify my order after placing it?",
    a: "Yes, within 1 hour from placing the order via your account page.",
  },
  {
    category: "Returns",
    q: "How do I initiate a return?",
    a: "Open your order details and click Start Return. We’ll guide you through it.",
  },
  {
    category: "Customer Support",
    q: "How can I unsubscribe from the newsletter?",
    a: "Use the unsubscribe link at the bottom of any newsletter email.",
  },
  {
    category: "Returns",
    q: "Do you offer exchanges for products?",
    a: "Yes, we offer exchanges for eligible products within 14 days of delivery, as long as they are unused and in their original packaging."
  },
  {
    category: "Ordering",
    q: "How can I place an order on Klothink?",
    a: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
  },
  {
    category: "Shipping",
    q: "What payment methods do you accept?",
    a: "Major credit/debit cards and cash on delivery in selected areas.",
  },
  {
    category: "Shipping",
    q: "How can I track my order?",
    a: "You’ll receive a tracking link by email and it appears on the Orders page.",
  },
  {
    category: "Shipping",
    q: "What is your shipping policy?",
    a: "Free shipping over $50; flat $4.99 fee for smaller orders.",
  },
  {
    category: "Returns",
    q: "Are there any additional fees for returns?",
    a: "Returns are free within 14 days for unused items in original packaging.",
  },
  {
    category: "Ordering",
    q: "How do I create an account on Klothink?",
    a: "Use the Sign Up page, verify your email, and log in to manage orders.",
  },
  {
    category: "Ordering",
    q: "Can I change my account information?",
    a: "Yes. Go to Account Settings to update your details any time.",
  },
  {
    category: "Customer Support",
    q: "Are my personal details secure on Klothink?",
    a: "Yes. We use industry-standard encryption and never share your data.",
  }
];

export default function Support() {
  return (

    <FAQSection
      mainTitle="QUESTIONS? WE HAVE ANSWERS."
      paragraph="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
      items={AS_FAQ_DATA}
      tabs={AS_TABS}
      idPrefix="klothink"
      singleOpen={true}
    />
  );
}
