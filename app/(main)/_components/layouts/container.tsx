import { Button } from "@/components/ui/button";

export default function Container() {
  return (
    <section className="flex items-center  h-screen bg-[#F2F0F1] ">
      <div className="container px-4 mx-auto flex ">
        <div>
          <h1 className="text-4xl text-black font-bold mb-2">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mb-2">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="rounded-[50px] w-44">Shop Now</Button>
          <div className="flex justify-between mt-2">
            <div>
              <h3 className="font-bold text-3xl">200+</h3>
              <p>International Brands</p>
            </div>
            <div>
              <h3 className="font-bold text-3xl">200+</h3>
              <p>International Brands</p>
            </div>
            <div>
              <h3 className="font-bold text-3xl">200+</h3>
              <p>International Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
