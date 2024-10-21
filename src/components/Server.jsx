

function Server() {
  return (
    <div className="h-[85vh] w-full flex justify-center items-center px-20 gap-20">
    <div className="w-1/2">
      <h1 className="text-[60px] leading-[55px] font-bold pr-10 text-left mb-5">
      Moderating the way it should be
      </h1>
      <p className="text-[23px] tracking-[0.22px] pr-10 text-[#555555] mb-6">
      Mastodon puts decision making back in your hands. Each server creates their own rules and regulations, which are enforced locally and not top-down like corporate social media, making it the most flexible in responding to the needs of different groups of people. Join a server with the rules you agree with, or host your own.
      </p>
      <button className="px-10 text-[22px] py-5 bg-[#6364ff] text-white rounded-xl font-semibold tracking-[0.22px]">
        Find a server
      </button>
    </div>
    <div className="w-1/2 pl-20">
      <img className="hover:scale-105 duration-500" src="/Images/asset 9.png" alt="" />
    </div>
  </div>
  )
}

export default Server