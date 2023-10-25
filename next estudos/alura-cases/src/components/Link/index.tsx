import NextLink from "next/link";

const Link = ({ children, href, ...props }) => {
	return <NextLink href={href}>{children}</NextLink>;
};

export default Link;
