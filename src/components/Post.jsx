function Post() {
  return (
    <div className="h-[85vh] w-full flex justify-center items-center px-20 gap-20">
      <div className="w-1/2">
        <h1 className="text-[60px] leading-[55px] font-bold pr-10 text-left mb-5">
          Stay in control of your own timeline
        </h1>
        <p className="text-[23px] tracking-[0.22px] pr-10 text-[#555555] mb-6">
          You know best what you want to see on your home feed. No algorithms or
          ads to waste your time. Follow anyone across any Mastodon server from
          a single account and receive their posts in chronological order, and
          make your corner of the internet a little more like you.
        </p>
        <button className="px-10 text-[22px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
          Learn More
        </button>
      </div>
      <div className="w-1/2 pl-20">
        <img className="hover:scale-105 duration-500" src="/Images/asset 5.png" alt="" />
      </div>
    </div>
  );
}

export default Post;
