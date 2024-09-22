import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div>
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person behind laptop"
          />
          <div>
            <div></div>
            <div>Available for new Projects</div>
          </div>
        </div>

        <h1>Building Expectional User experiences</h1>
        <p>
          I specialize in transforming designs into functional, appealing web
          applications. Lets discuss about a project and team up
        </p>
        <div>
          <button>
            <span>Explore my Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>🖐</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
