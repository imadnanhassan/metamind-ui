"use client";

import { motion } from "motion/react";
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
          title: "AI Development",
          items: [
            {
              name: "Data Labeling",
              href: "/products/data-labeling",
              description: "High-quality data annotation services",
            },
            {
              name: "Model Training",
              href: "/products/model-training",
              description: "Advanced ML model training platform",
            },
            {
              name: "Evaluation Suite",
              href: "/products/evaluation",
              description: "Comprehensive model evaluation tools",
            },
            {
              name: "Fine-tuning Tools",
              href: "/products/fine-tuning",
              description: "Optimize your models for specific tasks",
            },
          ],
        },
        {
          title: "Enterprise Solutions",
          items: [
            {
              name: "Custom Models",
              href: "/enterprise/custom-models",
              description: "Tailored AI solutions for your business",
            },
            {
              name: "API Integration",
              href: "/enterprise/api",
              description: "Seamless integration with existing systems",
            },
            {
              name: "Security Suite",
              href: "/enterprise/security",
              description: "Enterprise-grade security features",
            },
            {
              name: "Analytics Dashboard",
              href: "/enterprise/analytics",
              description: "Real-time insights and monitoring",
            },
          ],
        },
        {
          title: "Government",
          items: [
            {
              name: "Defense AI",
              href: "/government/defense",
              description: "AI solutions for defense applications",
            },
            {
              name: "Intelligence Analysis",
              href: "/government/intelligence",
              description: "Advanced intelligence processing",
            },
            {
              name: "Secure Deployment",
              href: "/government/secure",
              description: "Government-grade secure deployment",
            },
            {
              name: "Compliance Tools",
              href: "/government/compliance",
              description: "Meet regulatory requirements",
            },
          ],
        },
      ],
    },
    Solutions: {
      sections: [
        {
          title: "By Industry",
          items: [
            {
              name: "Healthcare",
              href: "/solutions/healthcare",
              description: "AI solutions for healthcare providers",
            },
            {
              name: "Finance",
              href: "/solutions/finance",
              description: "Financial services AI applications",
            },
            {
              name: "Automotive",
              href: "/solutions/automotive",
              description: "Autonomous vehicle technology",
            },
            {
              name: "Retail",
              href: "/solutions/retail",
              description: "Retail optimization and personalization",
            },
          ],
        },
        {
          title: "By Use Case",
          items: [
            {
              name: "Computer Vision",
              href: "/solutions/computer-vision",
              description: "Image and video analysis",
            },
            {
              name: "Natural Language",
              href: "/solutions/nlp",
              description: "Text processing and understanding",
            },
            {
              name: "Predictive Analytics",
              href: "/solutions/analytics",
              description: "Forecast trends and outcomes",
            },
            {
              name: "Automation",
              href: "/solutions/automation",
              description: "Intelligent process automation",
            },
          ],
        },
        {
          title: "By Role",
          items: [
            {
              name: "Data Scientists",
              href: "/solutions/data-scientists",
              description: "Tools for data science teams",
            },
            {
              name: "ML Engineers",
              href: "/solutions/ml-engineers",
              description: "MLOps and deployment solutions",
            },
            {
              name: "Product Teams",
              href: "/solutions/product-teams",
              description: "AI-powered product features",
            },
            {
              name: "Executives",
              href: "/solutions/executives",
              description: "Strategic AI implementation",
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
              name: "Documentation",
              href: "/docs",
              description: "Comprehensive API and platform docs",
            },
            {
              name: "Tutorials",
              href: "/tutorials",
              description: "Step-by-step learning guides",
            },
            {
              name: "Best Practices",
              href: "/best-practices",
              description: "Industry best practices and tips",
            },
            {
              name: "Case Studies",
              href: "/case-studies",
              description: "Real-world implementation examples",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              name: "Developer Forum",
              href: "/community/forum",
              description: "Connect with other developers",
            },
            {
              name: "Events",
              href: "/community/events",
              description: "Upcoming events and conferences",
            },
            {
              name: "Webinars",
              href: "/community/webinars",
              description: "Educational webinar series",
            },
            {
              name: "Blog",
              href: "/blog",
              description: "Latest news and insights",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              name: "Help Center",
              href: "/support",
              description: "Get help and find answers",
            },
            {
              name: "Contact Support",
              href: "/support/contact",
              description: "Reach our support team",
            },
            {
              name: "Status Page",
              href: "/status",
              description: "System status and uptime",
            },
            {
              name: "Training",
              href: "/support/training",
              description: "Professional training services",
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
