function Hero() {
  return (
    <div className="bg h-[110vh] w-full flex justify-center items-center">
      <div className="w-[80%] text-center flex flex-col justify-center items-center mb-24">
        <h1 className="text-[78px] w-[70%] leading-[75px] font-bold text-white px-20 mb-5">
          Social networking that not for sale.
        </h1>
        <p className="text-[23px] leading-[35px] text-white tracking-[0.22px] text-center px-20 mb-5 w-[70%]">
          Your home feed should be filled with what matters to you most, not
          what a corporation thinks you should see. Radically different social
          media, back in the hands of the people.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <button className="px-10 text-[20px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
            Join mastodon.social
          </button>
          <button className="px-10 text-[20px] py-5 bg-white text-[#6364ff] rounded-xl font-semibold tracking-[0.22px]">
            Pick another server
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
