import data from "./mastodon.json";
function WhyMastodon() {
  return (
    <div className="h-[85vh] w-full py-20">
      <h1 className="text-[42px] leading-[55px] font-bold text-center mb-16">
        Why Mastodon?
      </h1>
      <div className="flex justify-center flex-wrap items-center gap-5 ">
        {data.map((data) => (
          <div
            className="h-[423px] w-[353px] border-2 rounded-lg flex flex-col justify-center items-center px-6 hover:shadow-xl duration-300"
            key={data.id}
          >
            <img className="mb-3" src={data.img} alt="" />
            <h1 className="text-[28px] leading-[38px] tracking-[0.28px] mb-3 font-bold text-[#000000]">{data.title}</h1>
            <p className="text-[#555555] text-xl text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyMastodon;
