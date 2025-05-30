import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

function CreateQuestion() {
  const [formData, setFormData] = useState({
    question: "",
    options: [],
    correctOption: "",
    points: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { question, options, correctOption, points } = formData;
    let newErrors = {};

    if (!question.trim()) {
      newErrors.question = "Question is required";
    }

    if (!options.trim()) {
      newErrors.options = "Options is required";
    }

    if (!correctOption.trim()) {
      newErrors.correctOption = "Correct Option is required";
    }

    if (!points.trim()) {
      newErrors.points = "Points is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // call api of create question
      // axios.post('http://localhost:4001/questions/create', formData)
      //     .then(response => {
      //         console.log("login api response", response.data);
      //         navigate("/home");
      //     })
      //     .catch(error => {
      //         console.error("Error sending data: ", error);
      //     });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="form">
        <h1>Create Question Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
            />
            {errors.question && (
              <p className="field-error">{errors.question}</p>
            )}
          </div>

          <div>
            <label htmlFor="options">Options:</label>
            <input
              type="text"
              id="options"
              name="options"
              value={formData.options}
              onChange={handleChange}
            />
            {errors.options && <p className="field-error">{errors.options}</p>}
          </div>

          <div>
            <label htmlFor="correctOption">Correct Option:</label>
            <input
              type="number"
              id="correctOption"
              name="correctOption"
              value={formData.correctOption}
              onChange={handleChange}
            />
            {errors.correctOption && (
              <p className="field-error">{errors.correctOption}</p>
            )}
          </div>

          <div>
            <label htmlFor="points">Points:</label>
            <input
              type="number"
              id="points"
              name="points"
              value={formData.points}
              onChange={handleChange}
            />
            {errors.points && <p className="field-error">{errors.points}</p>}
          </div>

          <button className="form-btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateQuestion;
