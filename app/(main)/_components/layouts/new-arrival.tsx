import CardClothes from "@/components/ui/card-clothes";

export default function NewArrival() {
  return (
    <section className="container px-4 py-7 mx-auto">
      <center className=" my-10 ">
        <h1 className="font-bold text-5xl">NEW ARRIVAL</h1>
      </center>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 ">
        <CardClothes />
        <CardClothes />
        <CardClothes />
        <CardClothes />
      </div>
    </section>
  );
}
