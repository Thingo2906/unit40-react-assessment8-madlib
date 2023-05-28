import React, { useState } from "react";
const NewBoxForm = ({ addStory }) => {
  const INITIAL_STATE = { noun: "", noun2: "", adjective: "", color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData["noun"] &&
      formData["noun2"] &&
      formData["adjective"] &&
      formData["color"]
    ) {
      addStory(formData);
      setFormData(INITIAL_STATE);
    } 
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun"></label>
      <input
        type="text"
        id="noun"
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />

      <label htmlFor="noun2"></label>
      <input
        type="text"
        id="noun2"
        name="noun2"
        placeholder="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <label htmlFor="adjective"></label>
      <input
        type="text"
        id="adjective"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <label htmlFor="color"></label>
      <input
        type="text"
        id="color"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Get Story !</button>
    </form>
  );
};
export default NewBoxForm;
