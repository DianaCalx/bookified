import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import heroIllustration from "@/public/assets/hero-illustration.png";

const steps = [
  { title: "Upload PDF", description: "Add your book file" },
  { title: "AI Processing", description: "We analyze the content" },
  { title: "Voice Chat", description: "Discuss with AI" },
];

const HeroSection = () => {
  return (
    <section className="library-hero-card mb-10 md:mb-16">
      <div className="library-hero-content">
        {/* Left: title, description, CTA */}
        <div className="library-hero-text">
          <h1 className="library-hero-title">Your Library</h1>
          <p className="library-hero-description">
            Convert your books into interactive AI conversations. Listen, learn,
            and discuss your favorite reads.
          </p>
          <Link
            href="/books/new"
            className="library-cta-primary"
          >
            <Plus className="icon-sm" />
            Add new book
          </Link>
        </div>

        {/* Center: illustration (desktop) */}
        <div className="library-hero-illustration-desktop">
          <Image
            src={heroIllustration}
            alt="Antique books and a globe"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Center: illustration (mobile) */}
        <div className="library-hero-illustration">
          <Image
            src={heroIllustration}
            alt="Antique books and a globe"
            className="w-full h-auto max-w-70"
            priority
          />
        </div>

        {/* Right: numbered steps card */}
        <ol className="library-steps-card flex flex-col gap-4 w-full lg:w-auto lg:min-w-55">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="library-step-item"
            >
              <span className="library-step-number">{index + 1}</span>
              <div>
                <p className="library-step-title">{step.title}</p>
                <p className="library-step-description">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HeroSection;
