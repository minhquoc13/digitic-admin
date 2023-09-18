import React from "react";
import CustomInput from "../components/CustomInput";

const AddColor = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <div>
        <form action="">
          <CustomInput type="color" label="Enter Color"></CustomInput>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 mt-3"
          >
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
