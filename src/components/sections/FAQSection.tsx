import { faqItems } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="px-6 py-16 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}

