function Post2() {
  return (
    <div className="h-[85vh] w-full bg-[#f6f6f6] flex justify-center items-center px-20 gap-20">
      <div className="w-1/2 pl-20">
        <img className="hover:scale-105 duration-500" src="/Images/asset 7.png" alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[60px] leading-[65px] font-bold pr-10 text-left mb-5">
        Build your audience in confidence
        </h1>
        <p className="text-[23px] tracking-[0.22px] pr-10 text-[#555555] mb-6">
        Mastodon provides you with a unique possibility of managing your audience without middlemen. Mastodon deployed on your own infrastructure allows you to follow and be followed from any other Mastodon server online and is under no ones control but yours.
        </p>
        <button className="px-10 text-[22px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Post2;
