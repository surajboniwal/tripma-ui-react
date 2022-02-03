import React from "react";
import logo from "./../assets/logo.svg";
import googlePlay from "./../assets/google_play.png";
import appStore from "./../assets/app_store.png";
import twitter from './../assets/icons/twitter.svg'; 
import facebook from './../assets/icons/facebook.svg'; 
import instagram from './../assets/icons/instagram.svg'; 

function Footer() {
  return (
    <div className="">
      <div className="flex mt-40 w-[1400px] mx-auto">
        <div className="w-1/6">
          <img className="m-auto" src={logo} alt="" />
        </div>

        <div className="w-full flex">
          <div className="w-full mx-6">
            <MenuWithTitle
              title="About"
              items={[
                "About Tripma",
                "How it works",
                "Careers",
                "Press",
                "Blog",
                "Forum",
              ]}
            />
          </div>
          <div className="w-full mx-6">
            <MenuWithTitle
              title="Partner with us"
              items={[
                "Partnership programs",
                "Affiliate program",
                "Connectivity partners",
                "Promotions and events",
                "Integrations",
                "Community",
                "Loyalty program",
              ]}
            />
          </div>
          <div className="w-full mx-6">
            <MenuWithTitle
              title="Support"
              items={[
                "Help Center",
                "Contact us",
                "Privacy policy",
                "Terms of service",
                "Trust and safety",
                "Accessibility",
              ]}
            />
          </div>
          <div className="w-full mx-6">
            <MenuWithTitle
              title="Get the app"
              items={["Tripma for Android", "Tripma for iOS", "Mobile site"]}
            />
            <img className="mt-6 cursor-pointer" src={appStore} alt="" />
            <img className="mt-4 cursor-pointer" src={googlePlay} alt="" />
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-grey-200 bg-opacity-30 mt-4"></div>

      <div className="h-[72px] flex items-center w-[1400px] mx-auto my-3 justify-between">
          <div className="flex">
            <img className="h-[24px] w-[24px] ml-6 cursor-pointer" src={twitter} alt="" />
            <img className="h-[24px] w-[24px] ml-6 cursor-pointer" src={instagram} alt="" />
            <img className="h-[24px] w-[24px] ml-6 cursor-pointer" src={facebook} alt="" />
          </div>

          <div className="mr-24 text-[18px] text-grey-400">
            © 2020 Tripma incorporated
          </div>
      </div>
    </div>
  );
}

function MenuWithTitle({ title, items }) {
  return (
    <div>
      <div className="text-[18px] text-grey-600 font-bold">{title}</div>
      {items.map((item) => (
        <div className="text-grey-400 my-3 cursor-pointer" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Footer;
