const InputBlock = ({ label, type, id }) => {
  return (
    <>
      <label className="2xl:text-xl" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full px-6 py-2 text-xl 2xl:mt-2 2xl:py-4 focus:outline-none rounded-xl bg-Lynx_White"
      />
    </>
  );
};

export default InputBlock;
