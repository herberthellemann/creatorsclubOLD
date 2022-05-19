import { Wrapper } from "./MenuItem.styles";
import Link from "next/link";

type MenuItemProps = {
  name: string;
  icon: React.ComponentType;
  url: string;
};

export default function MenuItem({ name, icon: Icon, url }: MenuItemProps) {
  return (
    <Link href={url} passHref>
      <Wrapper>
        <a>
          <Icon />
          <span>{name}</span>
        </a>
      </Wrapper>
    </Link>
  );
}
