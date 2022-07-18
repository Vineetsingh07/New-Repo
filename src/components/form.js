import * as React from "react";
import { Grid } from "@mui/material";

export default function Form({ addChild }) {
  const [initialData, setInitialData] = React.useState({ name: "", age: "" });

  const handleChange = (e) => {
    const name = e.target.name;

    const value = e.target.value;

    setInitialData({ ...initialData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialData(initialData);
    addChild(initialData);
    setInitialData({ name: "", age: "" });
  };

  return (
    <Grid container spacing={0} align="center">
      <form onSubmit={handleSubmit}>
        <Grid item xs={2}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={initialData.name}
              onChange={handleChange}
            />
          </label>
        </Grid>
        <Grid item xs={2}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={initialData.age}
              onChange={handleChange}
            />
          </label>
        </Grid>
        <Grid item xs={2}>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={initialData.price}
              onChange={handleChange}
            />
          </label>
        </Grid>
        <button>Submit</button>
      </form>
    </Grid>
  );
}
