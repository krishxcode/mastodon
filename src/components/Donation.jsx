function Donation() {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <img className="h-[435px] w-[435px]" src="/Images/asset 21.png" alt="" />
      <h1 className="text-[60px] leading-[55px] font-bold  text-center mb-10 ">
        Independent always
      </h1>
      <p className="text-[23px] tracking-[0.22px] text-[#555555] mb-8 w-1/2">
        Mastodon is free and open-source software developed by a non-profit
        organization. Public support directly sustains development and
        evolution.
      </p>
      <div className="flex gap-6">
        <button className="px-10 text-[20px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
          Donate on Patreon
        </button>
        <button className="px-10 text-[20px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
          Donate directly
        </button>
        <button className="px-10 text-[20px] py-5 bg-white text-[#6364ff] border-[#6364ff] border-2 rounded-xl font-semibold tracking-[0.22px]">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Donation;
