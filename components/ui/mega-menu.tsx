"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface MegaMenuProps {
  type: string;
  onItemClick: () => void;
}

export function MegaMenu({ type, onItemClick }: MegaMenuProps) {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuContent = {
    Products: {
      sections: [
        {
          title: "AI SEO Tools",
          items: [
            {
              name: "AI Content Writer",
              href: "/products/ai-content-writer",
              description:
                "Generate blogs, website copy, and product descriptions",
            },
            {
              name: "Meta Tag Generator",
              href: "/products/meta-tag-generator",
              description: "Create optimized meta titles and descriptions",
            },
            {
              name: "Keyword Research Tool",
              href: "/products/keyword-research",
              description: "Discover profitable and trending keywords",
            },
            {
              name: "SEO Auditor",
              href: "/products/seo-auditor",
              description: "Analyze your website’s SEO health",
            },
            {
              name: "Content Rewriter / Improver",
              href: "/products/content-rewriter",
              description: "Refresh and enhance existing content",
            },
            {
              name: "SERP Rank Tracker",
              href: "/products/rank-tracker",
              description: "Monitor keyword rankings over time",
            },
            {
              name: "Analytics & Reporting Tool",
              href: "/products/analytics-reporting",
              description: "Visualize traffic and SEO KPIs",
            },
          ],
        },
      ],
    },
    Solutions: {
      sections: [
        {
          title: "By Audience",
          items: [
            {
              name: "For Marketers",
              href: "/solutions/marketers",
              description: "Boost traffic and conversions with AI SEO",
            },
            {
              name: "For Bloggers",
              href: "/solutions/bloggers",
              description: "Grow your blog audience effortlessly",
            },
            {
              name: "For SEO Agencies",
              href: "/solutions/seo-agencies",
              description: "Scale client results with automation",
            },
            {
              name: "For SaaS Startups",
              href: "/solutions/saas",
              description: "Product-led SEO for rapid growth",
            },
            {
              name: "For eCommerce Brands",
              href: "/solutions/ecommerce",
              description: "Drive organic sales with optimized content",
            },
          ],
        },
        {
          title: "Enterprise",
          items: [
            {
              name: "White-label Options",
              href: "/enterprise/white-label",
              description: "Offer our tools under your brand",
            },
            {
              name: "Custom API Access",
              href: "/enterprise/api",
              description: "Direct access to our AI engine",
            },
            {
              name: "Dedicated Support",
              href: "/enterprise/support",
              description: "Priority assistance and onboarding",
            },
            {
              name: "Team Collaboration",
              href: "/enterprise/team",
              description: "Workspaces for your internal teams",
            },
            {
              name: "Volume Pricing",
              href: "/enterprise/pricing",
              description: "Get discounts for large-scale usage",
            },
          ],
        },
      ],
    },
    Resources: {
      sections: [
        {
          title: "Learn",
          items: [
            {
              name: "Blog",
              href: "/blog",
              description: "AI and SEO tips from industry experts",
            },
            {
              name: "SEO Academy",
              href: "/academy",
              description: "Master SEO with structured lessons",
            },
            {
              name: "Documentation",
              href: "/docs",
              description: "API and feature guides",
            },
            {
              name: "Webinars / Events",
              href: "/events",
              description: "Live sessions with SEO leaders",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              name: "FAQ",
              href: "/faq",
              description: "Answers to common questions",
            },
            {
              name: "Contact Support",
              href: "/support/contact",
              description: "Need help? Talk to us",
            },
          ],
        },
      ],
    },
    Customers: {
      sections: [
        {
          title: "Trusted by 200+ Brands",
          items: [
            {
              name: "Case Studies",
              href: "/customers/case-studies",
              description: "See how others achieved results",
            },
            {
              name: "Testimonials",
              href: "/customers/testimonials",
              description: "Hear from our happy users",
            },
            {
              name: "Logo Showcase",
              href: "/customers/logos",
              description: "Our growing customer base",
            },
          ],
        },
      ],
    },
    Pricing: {
      sections: [
        {
          title: "Plans & Features",
          items: [
            {
              name: "Free Plan",
              href: "/pricing/free",
              description: "Get started at zero cost",
            },
            {
              name: "Starter, Pro, Agency",
              href: "/pricing/tiers",
              description: "Choose the plan that fits your growth",
            },
            {
              name: "Comparison Table",
              href: "/pricing/comparison",
              description: "Compare features by plan",
            },
            {
              name: "Feature Breakdown",
              href: "/pricing/features",
              description: "See what each plan includes",
            },
          ],
        },
      ],
    },
  };


  const content = menuContent[type as keyof typeof menuContent];
  const allItems = content.sections.flatMap((section) => section.items);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % allItems.length);
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex(
            (prev) => (prev - 1 + allItems.length) % allItems.length
          );
          break;
        case "Enter":
          if (focusedIndex >= 0) {
            event.preventDefault();
            handleItemClick(allItems[focusedIndex].href);
          }
          break;
        case "Tab":
          if (event.shiftKey && focusedIndex === 0) {
            onItemClick();
          } else if (!event.shiftKey && focusedIndex === allItems.length - 1) {
            onItemClick();
          }
          break;
      }
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("keydown", handleKeyDown);
      return () =>
        menuRef.current?.removeEventListener("keydown", handleKeyDown);
    }
  }, [focusedIndex, allItems, onItemClick]);

  const handleItemClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
    // Add actual navigation logic here
    // router.push(href)
    onItemClick();
  };

  return (
    <motion.div
      ref={menuRef}
      className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      role="menu"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {content.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const globalIndex =
                    content.sections
                      .slice(0, sectionIndex)
                      .reduce((acc, s) => acc + s.items.length, 0) + itemIndex;

                  return (
                      <li key={item.name}>
                      <Link href={item.href}>
                      <button
                        onClick={() => handleItemClick(item.href)}
                        onMouseEnter={() => setFocusedIndex(globalIndex)}
                        className={`text-left w-full p-3 rounded-lg transition-all duration-200 group ${
                          focusedIndex === globalIndex
                            ? "bg-gray-800/70 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                        }`}
                        role="menuitem"
                        tabIndex={focusedIndex === globalIndex ? 0 : -1}
                      >
                        <div className="font-medium mb-1">{item.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">
                          {item.description}
                        </div>
                      </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
