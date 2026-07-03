import UnderlineLink from "@/components/UnderlineLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-4 lg:px-0">
      <div className="w-full max-w-xl mx-auto pb-10">
        <div className="w-full h-px bg-neutral-200" />
        <div className="flex flex-col space-y-2 pt-5">
          <UnderlineLink href="mailto:viktor_atanasov@icloud.com">
            <span className="font-geist text-[16px] font-light text-neutral-900">
              Email
            </span>
          </UnderlineLink>
          <UnderlineLink href="https://github.com/viatanas" external>
            <span className="font-geist text-[16px] font-light text-neutral-900">
              GitHub
            </span>
          </UnderlineLink>
          <UnderlineLink href="https://www.linkedin.com/in/viatanas/" external>
            <span className="font-geist text-[16px] font-light text-neutral-900">
              LinkedIn
            </span>
          </UnderlineLink>
          <UnderlineLink
            href="https://www.instagram.com/viktorsatanasov/"
            external
          >
            <span className="font-geist text-[16px] font-light text-neutral-900">
              Instagram
            </span>
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
