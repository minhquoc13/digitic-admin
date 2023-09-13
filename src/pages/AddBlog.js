import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h3 className="mb-4">Add Blog</h3>

      <div className="">
        <form action="">
          <CustomInput type="text" lable="Enter blog title" />
          <select name="" id="">
            <option value="">Select blog category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(e) => {
              handleDesc(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
