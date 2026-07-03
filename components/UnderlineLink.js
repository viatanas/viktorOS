import Link from "next/link";

const UnderlineLink = ({ href, children, external, ...props }) => {
  const className =
    "underline decoration-neutral-300 underline-offset-[3px] decoration-[1px] transition-colors duration-200 hover:decoration-neutral-900";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};

export default UnderlineLink;
