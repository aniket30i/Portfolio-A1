import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aniketsaha43c/",
  },
  {
    title: "Github",
    href: "https://github.com/aniket30i",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ahhniket30mki/",
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container z-10 ">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
