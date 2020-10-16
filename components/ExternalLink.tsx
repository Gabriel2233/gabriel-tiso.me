import { Link } from "@chakra-ui/core";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const ExternalLink: React.FC<Props> = ({
  children,
  href,
  ...otherProps
}) => {
  return (
    <Link href={href} target="_blank" {...otherProps} textDecor="underline">
      {children}
    </Link>
  );
};
