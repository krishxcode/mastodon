function Header() {
  return (
    <div className="absolute top-0 right-0- left-0 h-[15vh] w-full px-20 flex justify-between items-center">
      <div className="logo">
        <img className="h-14 w-full" src="/Images/asset 1.svg" alt="" />
      </div>
      <ul className="flex justify-center items-center gap-10">
        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            Servers
          </a>
        </li>
        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            App
          </a>
        </li>
        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            Merch
          </a>
        </li>
        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            Donate
          </a>
        </li>
        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            Resources
          </a>
        </li>
        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            Verification 
          </a>
        </li>

        <li>
          <a className="text-[19px] tracking-[1px] text-white font" href="">
            文A
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
