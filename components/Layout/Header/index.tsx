import {
  HeaderContainer,
  TitleContainer,
  LogInButton,
  AccountArea,
  Avatar,
} from "./Header.styles";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

type HeaderProps = {
  title: string;
};

export default function Header() {
  const router = useRouter();
  // Get the first level path
  const pathname = router.pathname.split("/")[1];
  const upPathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);
  let title: string;
  if (upPathname.length == 0) {
    title = "Home";
  } else {
    title = upPathname;
  }

  const { data: session, status } = useSession();
  let right = null;
  const handleLogout = () => {
    signOut();
    router.push("/api/auth/signin");
  };

  if (status === "loading") {
    right = <p>Loading...</p>;
  }
  if (!session) {
    right = (
      <LogInButton>
        <Link href="/api/auth/signin">
          <a>Log in</a>
        </Link>
      </LogInButton>
    );
  }
  if (session) {
    right = (
      <AccountArea>
        <p>{session.user?.email}</p>
        <Avatar>
          <Image
            src={"https://images.unsplash.com/photo-1652538302725-0ee98032dcad"}
            layout="fill"
            objectFit="cover"
            alt="Profile pic"
          />
        </Avatar>
        <LogInButton onClick={handleLogout}>Log out</LogInButton>
      </AccountArea>
    );
  }

  return (
    <HeaderContainer>
      <TitleContainer>{title}</TitleContainer>
      {right}
    </HeaderContainer>
  );
}
