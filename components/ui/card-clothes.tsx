import Image from "next/image";
export default function CardClothes() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="overflow-hidden w-[295px] h-[295px] rounded-lg">
          <Image
            src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            objectFit="cover"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>

        <div>
          <h3>Clothes</h3>
          <p>Shop for clothes</p>
        </div>
      </div>
    </div>
  );
}
