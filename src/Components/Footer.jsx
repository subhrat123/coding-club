import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="
     bg-gradient-to-r from-[#0b0b16] via-[#12122d] to-[#0b0b16] text-white py-12 px-6 md:px-16 lg:px-24"
      >
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          {/* <!-- Left Section (CTA) --> */}
          <div class="max-w-lg">
            <h2
              class="text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Join The Community
            </h2>
            <p class="mt-10 text-gray-400 text-sm">
              With Coding Club RSCOE, you can touch bounds you never even imagined of and learn what you never thought you could. Join us now and be a part of one of the most amazing communities in the world.     
            </p>
          </div>

          {/* /* <!-- Right Section (Social Links) --> */}
          <div class="mt-[60px] wmd:mt-0">
            <ul class="space-y-3 text-white opacity-90 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              <li class="flex items-center justify-between border-b border-gray-700 pb-4">
                <span class="flex items-center">
                  <i class="fa-brands fa-facebook mr-2"></i> FACEBOOK
                </span>
                <a href="#" class="text-gray-400 hover:text-white ml-4">
                  ↗
                </a>
              </li>
              <li class="flex items-center justify-between border-b border-gray-700 pb-4">
                <span class="flex items-center">
                  <i class="fa-brands fa-instagram mr-2"></i> INSTAGRAM
                </span>
                <a href="#" class="text-gray-400 hover:text-white ml-52">
                  ↗
                </a>
              </li>
              <li class="flex items-center justify-between border-b border-gray-700 pb-4">
                <span class="flex items-center">
                  <i class="fa-brands fa-linkedin mr-2"></i> LINKEDIN
                </span>
                <a href="#" class="text-gray-400 hover:text-white ml-4">
                  ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Navigation Links --> */}
        <div class="max-w-6xl pt-[60px] mx-auto mt-10">
          <ul
            className="mt-4 space-y-3 text-[10px] text-white tracking-widest"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li class="flex justify-between border-b border-gray-700 pb-2">
              <span>SUBSCRIPTION</span>
              <a href="#" class="text-gray-400 hover:text-white">
                ↗
              </a>
            </li>
            <li class="flex justify-between border-b border-gray-700 pb-2">
              <span>ABOUT US</span>
              <a href="#" class="text-gray-400 hover:text-white">
                ↗
              </a>
            </li>
            <li class="flex justify-between border-b border-gray-700 pb-2">
              <span>TEAM</span>
              <a href="#" class="text-gray-400 hover:text-white">
                ↗
              </a>
            </li>
            <li class="flex justify-between border-b border-gray-700 pb-2">
              <span>CONTACT</span>
              <a href="#" class="text-gray-400 hover:text-white">
                ↗
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Bottom Copyright Section --> */}
        <div class="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© Coding Club RSCOE 2021 - 2024. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
