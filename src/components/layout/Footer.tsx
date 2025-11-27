import Link from "next/link";
import { Flag } from "lucide-react";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "FAQ"] },
  { title: "Resources", links: ["Blog", "Support", "Privacy"] },
  { title: "Community", links: ["Twitter", "Discord", "Email"] },
];

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-semibold text-lg mb-3">Prefill AI</h3>
          <p className="text-sm text-white/70 flex items-center gap-2">
            <Flag className="h-4 w-4 text-white" aria-hidden />
            <span>Made for HK students, by students</span>
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="font-semibold mb-2">{column.title}</h4>
            <ul className="space-y-1 text-sm text-white/70">
              {column.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

