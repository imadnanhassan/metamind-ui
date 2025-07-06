import React from "react";

const layout = ({ children }: any) => {
  return (
    <main>
      <header>
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">Tennis Club</div>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Tennis Club. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default layout;
