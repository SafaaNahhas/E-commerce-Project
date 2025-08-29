import FAQSection from "../../common/FAQSection/FAQSection";

const AS_TABS = ["All", "Product Details", "Care Instructions", "Styling Tips", "Sizing & Fit"];
const AS_FAQ_DATA = [
    {
        category: "Product Details",
        q: "Does the jacket come in different colors?",
        a: "Yes, the Urban Explorer Denim Jacket is available in multiple color options so you can choose the one that best suits your style.",
    },
    {
        category: "Product Details",
        q: "Are there any inside pockets in the jacket?",
        a: "Yes, the jacket includes inside pockets for extra convenience and secure storage of your essentials.",
    },
    {
        category: "Care Instructions",
        q: "Can I machine wash the denim jacket?",
        a: "Yes, the jacket can be machine washed on a gentle cycle, but we recommend checking the care label for specific washing instructions.",
    },
    {
        category: "Styling Tips",
        q: "How do I style the jacket for different occasions?",
        a: "The jacket is versatile: pair it with casual jeans and sneakers for everyday wear, or layer it over a shirt and chinos for a smart-casual look."
    },
    {
        category: "Product Details",
        q: "What is the material of the Urban Explorer Denim Jacket?",
        a: "The jacket is crafted from high-quality denim, composed of 100% cotton for a comfortable and durable wear.",
    },
    {
        category: "Sizing & Fit",
        q: "How do I determine the right size for me?",
        a: "Please refer to our size chart on the product page, and if you are between sizes, we recommend sizing up for a more relaxed fit.",
    },
    {
        category: "Care Instructions",
        q: "Can I machine wash the denim jacket?",
        a: "Yes, the jacket can be machine washed on a gentle cycle, but we recommend checking the care label for specific washing instructions.",
    },
    {
        category: "Product Details",
        q: "Does the jacket come in different colors?",
        a: "Yes, the Urban Explorer Denim Jacket is available in multiple color options so you can choose the one that best suits your style.",
    },
    {
        category: "Product Details",
        q: "Is the distressed detailing on the jacket prone to fraying?",
        a: "The distressed design is reinforced during production to maintain its look, so it should not fray excessively with normal use.",
    },
    {
        category: "Product Details",
        q: "Does the jacket come in different colors?",
        a: "Yes, the Urban Explorer Denim Jacket is available in multiple color options so you can choose the one that best suits your style.",
    },
    {
        category: "Care Instructions",
        q: "Can I machine wash the denim jacket?",
        a: "Yes, the jacket can be machine washed on a gentle cycle, but we recommend checking the care label for specific washing instructions.",
    },
    {
        category: "Styling Tips",
        q: "How do I style the jacket for different occasions?",
        a: "The jacket is versatile: pair it with casual jeans and sneakers for everyday wear, or layer it over a shirt and chinos for a smart-casual look.",
    }
];

export default function Support() {
    return (

        <FAQSection
            mainTitle="Frequently asked questions"
            paragraph="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
            items={AS_FAQ_DATA}
            tabs={AS_TABS}
            idPrefix="klothink"
            singleOpen={true}
        />
    );
}
