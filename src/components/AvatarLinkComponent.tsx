import React from "react";
import Avatar from "@mui/material/Avatar";
interface AvatarLinkProps {
  alt: string;
  src: string;
  href: string;
}
const AvatarLink = ({ alt, src, href }: AvatarLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Avatar
      alt={alt}
      src={src}
      sx={{
        width: "2rem",
        height: "2rem",
        cursor: "pointer",
      }}
    />
  </a>
);

export default AvatarLink;
