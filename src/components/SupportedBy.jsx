import data from "./supportedbycompany.json";

function SupportedBy() {
  return (
    <div className="h-[85vh] w-full px-40 py-16">
      <h1 className="text-[42px] leading-[55px] font-bold text-center mb-16">
        Supported By
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            className="w-[289px] h-[74px] bg-[#f6f6f6] rounded-lg flex items-center justify-center hover:shadow-xl duration-300 cursor-pointer"
            key={item.id}
          >
            <img
              src={item.img}
              alt=""
              className="h-[40px] w-[230px] object-contain filter grayscale"
            />
          </div>
        ))}
      </div>
      <p className="text-[18px] text-[#9b9b9b] leading-[24px] font-semibold text-center mt-16">
        Sponsorship does not equal influence. Mastodon is fully independent
      </p>
    </div>
  );
}

export default SupportedBy;
