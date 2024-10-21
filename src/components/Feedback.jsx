import data from "./feedback.json";

function Feedback() {
  return (
    <div className="bg-[#f6f6f6] h-[95vh] w-full py-20">
      <h1 className="text-[42px] leading-[55px] font-bold text-center mb-16">
        What our users are saying
      </h1>

      <div className="flex justify-center flex-wrap items-center gap-5">
        {data.map((data) => (
          <div
            className="bg-[#ffffff] h-auto w-[476px] shadow-xl rounded-2xl flex flex-col justify-center items-center p-6 hover:shadow-2xl duration-300 cursor-pointer"
            key={data.id}
          >
            <img
              className="h-[128px] w-[128px] rounded-full mb-5"
              src={data.img}
              alt=""
            />
            <p className="text-[#000000] text-[21px] leading-[30px] tracking-[0.2px] text-center mb-5">
              {data.description}
            </p>
            <div>
              <p className="text-center text-[19px] font-semibold leading-[25px] tracking-[0.16px]">
                {data.name}
              </p>
              <a
                className="text-[#563acc] text-[17px] font-semibold leading-[25px] tracking-[0.16px]"
                href=""
              >
                {data.user_id}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
