import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image src={memojiImage} alt="Person behind laptop" />
        <div>
          <div></div>
          <div>Available for new Projects</div>
        </div>
      </div>
    </div>
  );
};
