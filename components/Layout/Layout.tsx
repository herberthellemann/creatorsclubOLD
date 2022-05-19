import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container, Content, PageContainer } from "./Layout.styles";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Creators Club</title>
      </Head>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <PageContainer>{children}</PageContainer>
        </Content>
      </Container>
    </>
  );
}
