import React from "react";

const Checkbox = ({ isChecked, onChange, children }) => {
  return (
    <label className="relative flex items-center w-full gap-4 pl-6 mx-2 ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange((prev) => !prev)}
        className="element"
      />
      <p className="">{children}</p>
    </label>
  );
};

export default Checkbox;
