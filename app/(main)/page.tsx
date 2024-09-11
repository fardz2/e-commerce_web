import NavBar from "./_components/layouts/navbar";
import Container from "./_components/layouts/container";
import Brand from "./_components/layouts/brand";
import NewArrival from "./_components/layouts/new-arrival";
import TopSelling from "./_components/layouts/top-selling";
export default async function Page() {
  return (
    <>
      <NavBar />
      <Container />
      <Brand />
      <NewArrival />
      <TopSelling />
    </>
  );
}
