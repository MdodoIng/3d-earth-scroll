const Descriptions = ({ data, selectedProject }) => {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="absolute top-[3px] h-full w-full z-[2] pointer-events-none">
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            style={{
              clipPath:
                selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%",
            }}
            className="bg-[#ec4e39] transition-all duration-[.4s] flex justify-between items-center px-[10%]"
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[1]">
              {crop(title, 9)}
            </p>
            <p className="w-[40%] text-[1vw] font-bold">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
