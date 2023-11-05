const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth
}) => {
  const defaultClasses =
    "bg-coral-red text-white border-coral-red hover:bg-red-500 transition-all";

  const combinedClassed = `flex justify-center items-center gap-2 px-7 py-4 border-slate-gray font-montserrat text-lg leading-none rounded-full ${
    backgroundColor
      ? `${backgroundColor} ${borderColor} ${textColor}`
      : defaultClasses
  } ${fullWidth && "w-full"}`;

  return (
    <button className={combinedClassed}>
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
