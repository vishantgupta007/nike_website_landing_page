import { star } from "../assets/icons";
const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col justify-center w-full max-sm:w-full gap-2">
      <img
        src={imgURL}
        alt={name}
        width={200}
        height={200}
        className=" hover:scale-110
        transition-transform"
      />
      <div className="mt-8 flex justify-start gap-3 ">
        <img src={star} alt="rating" />
        <span className="text-slate-500 leading-normal">(4.5)</span>
      </div>
      <h3 className="font-semibold text-2xl leading-3 font-palanquin mb-1">
        {name}
      </h3>
      <p className="font-bold font-montserrat text-coral-red text-xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
