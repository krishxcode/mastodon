function Footer() {
  return (
    <div className="h-[150vh] w-full footer flex justify-between items-end text-white px-20">
      <div className="mb-40">
        <img className="mb-5" src="/Images/asset 1.svg" alt="" />
        <p className="text-[18px] tracking-[0.16px]">Free, open-source decentralized social media platform.</p>
      </div>

      <div className="flex justify-around items-center mb-40  w-1/2">
        <div>
          <h1 className="text-[#ffffff] text-[28px] mb-5 leading-[30px] tracking-[0.22] text-left font-bold">
            Product
          </h1>
          <ul className="text-[#bd8dc8] flex flex-col gap-5">
            <li className="">
              <a className="text-[20px] tracking-[0.16px]" href="">
                Servers
              </a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">
                Apps
              </a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">
                Donate
              </a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">
                Roadmap
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#ffffff] text-[28px] mb-5 leading-[30px] tracking-[0.22] text-left font-bold">
            Resources
          </h1>
          <ul className="text-[#bd8dc8] flex flex-col gap-5">
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Source code</a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Blog</a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Documentation</a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#ffffff] text-[28px] mb-5 leading-[30px] tracking-[0.22] text-left font-bold">
            Company
          </h1>
          <ul className="text-[#bd8dc8] flex flex-col gap-5">
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">About us</a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Branding</a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Careers</a>
            </li>
            <li>
              <a className="text-[20px] tracking-[0.16px]" href="">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
