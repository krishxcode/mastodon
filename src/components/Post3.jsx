function Post3() {
  return (
    <div className="h-[85vh] w-full bg-[#f6f6f6] flex justify-center items-center px-20 gap-20">
      <div className="w-1/2 pl-20">
        <img className="hover:scale-105 duration-500" src="/Images/asset 10.png" alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[60px] leading-[55px] font-bold pr-10 text-left mb-5">
          Unparalleled creativity
        </h1>
        <p className="text-[23px] tracking-[0.22px] pr-10 text-[#555555] mb-6">
          Mastodon supports audio, video and picture posts, accessibility
          descriptions, polls, content warnings, animated avatars, custom
          emojis, thumbnail crop control, and more, to help you express yourself
          online. Whether you are publishing your art, your music, or your
          podcast, Mastodon is there for you.
        </p>
        <button className="px-10 text-[22px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Post3;
