import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "I like it but I think it will be too difficult to customize",
    answer:
      "Our templates are built with Tailwind CSS, making customization simple and efficient.",
  },
  {
    question: "What platform is the template made for?",
    answer: "It is designed for modern web frameworks like React, Next.js, and Vue.",
  },
  {
    question: "Is it optimized for speed and performance?",
    answer: "Yes! The template is lightweight, optimized for fast load times, and follows best practices.",
  },
  {
    question: "If I get stuck when customizing can I get help from you?",
    answer: "Absolutely! We offer support and documentation to help you customize as needed.",
  },
  {
    question: "Where will my site be hosted?",
    answer:
      "You can host your site on any platform like Vercel, Netlify, or traditional web hosting services.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Dynamically set --max-height based on content height
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.setProperty("--max-height", ref.scrollHeight + "px");
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6" style={{ fontFamily: "Inter, sans-serif" }}>
      <h2 className="text-center text-3xl font-bold text-white mb-8">Maybe We Have An Answer</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-md overflow-hidden">
            <button
              className="w-full text-left flex justify-between items-center p-4 text-white hover:bg-gray-800 transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bold opacity-80">{faq.question}</span>
              <span
                className={`text-xl transition-transform duration-300 ease-in-out ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out"
              style={{
                maxHeight: openIndex === index ? "var(--max-height)" : "0px",
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <div className="p-4 text-gray-300">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
