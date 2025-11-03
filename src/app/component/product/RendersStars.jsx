const { AiFillStar, AiOutlineStar } = require("react-icons/ai");

export default function RenderStars  ({rating})  {
    if (rating > 5) {
      rating = 5;
    }else if (rating < 0) {
      rating = 0;
    }
    const fullStars = Math.floor(rating);
    const remainder = rating - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} className="text-[#e7721b] text-xl" />);
    }

    if (remainder > 0) {
      const fillPercent = Math.round(remainder * 100);
      stars.push(
        <div key="partial" className="relative w-5 h-5 shrink-0">
          <AiOutlineStar className="absolute text-[#e7721b] text-xl" />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${fillPercent}%` }}
          >
            <AiFillStar className="text-[#e7721b] text-xl" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<AiOutlineStar key={`empty-${i}`} className="text-[#e7721b] text-xl" />);
    }

    return (
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
    );
  };