import { useEffect, useState } from "react";
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



//safaa
const ALL_TABS = ["All", "Ordering", "Shipping", "Returns", "Customer Support"];


export default function Support({ isDashboard }) {
  // safaa
  const [faqs, setFaqs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ q: '', a: '', category: 'Ordering' });

  useEffect(() => {
    let storedFaqs = JSON.parse(localStorage.getItem('faqs')) || [];
    if (storedFaqs.length === 0) {
      localStorage.setItem('faqs', JSON.stringify(AS_FAQ_DATA));
      storedFaqs = AS_FAQ_DATA;
    }
    setFaqs(storedFaqs);
  }, []);

  useEffect(() => {
    if (editingIndex !== null) {
      setForm(faqs[editingIndex]);
    } else {
      setForm({ q: '', a: '', category: 'Ordering' });
    }
  }, [editingIndex, faqs]);

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFaqs = [...faqs];
    if (editingIndex !== null) {
      newFaqs[editingIndex] = form;
      setEditingIndex(null);
    } else {
      newFaqs.push(form);
    }
    setFaqs(newFaqs);
    localStorage.setItem('faqs', JSON.stringify(newFaqs));
    setForm({ q: '', a: '', category: 'Ordering' });
  };

  const handleDelete = (index) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(updatedFaqs);
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };
  
  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };
  // 
  return (
  <section className="faq-page-container">
      {/*safaa*/}
      {isDashboard && (
        <section className="SN-dashboard-section">
          <div className="SN-dashboard-header">
            <h2 className="SN-dashboard-title">Manage FAQs
            </h2>
          </div>
          <form className="SN-dashboard-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="q" 
              placeholder="Question" 
              value={form.q}
              onChange={handleFormChange} 
              required 
            />
            <textarea 
              name="a" 
              placeholder="Answer" 
              value={form.a}
              onChange={handleFormChange} 
              required 
            />
            <select 
              name="category"
              value={form.category}
              onChange={handleFormChange}
              required
            >
              {AS_TABS.slice(1).map(tab => (
                <option key={tab} value={tab}>{tab}</option>
              ))}
            </select>
            <button type="submit">
              {editingIndex !== null ? 'Update FAQ' : 'Add New FAQ'}
            </button>
            {editingIndex !== null && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="cancel-SN-edit-btn"
              >
              Cancel Edit
              </button>
            )}
          </form>
        </section>
      )}

    <FAQSection
      isDashboard={isDashboard}
      mainTitle="QUESTIONS? WE HAVE ANSWERS."
      paragraph="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
      // items={AS_FAQ_DATA}
      items={faqs} 
      // tabs={AS_TABS}
      // idPrefix="klothink"
      // singleOpen={true}
      
       // safaa: 
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      
    />
    </section>
  );
}
