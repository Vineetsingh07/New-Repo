import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Form from "./form";
import Button from "@mui/material/Button";

function Parents() {
  const [parentData, setParentData] = React.useState([
    {
      name: "Abc",
      age: 21,
      children: [
        { name: "C", age: 10, price: 10 },
        { name: "D", age: 12, price: 20 },
        { name: "E", age: 15, price: 30 },
      ],
    },
    {
      name: "xyz",
      age: 25,
      children: [
        { name: "F", age: 20, price: 110 },
        { name: "G", age: 22, price: 120 },
        { name: "H", age: 35, price: 130 },
      ],
    },
  ]);

  const [selectedParent, setSelectedParent] = React.useState();

  const [sum, setSum] = React.useState(-1);

  const [showForm, setShowForm] = React.useState(false);

  const sumOfPrice = () => {
    let _sum = 0;
    for (let index = 0; index < selectedParent.children.length; index++) {
      const element = selectedParent.children[index];
      _sum += Number(element.price);
    }
    setSum(_sum);
  };

  const addChild = (obj) => {
    console.log("obj", obj);

    const newObject = { ...selectedParent };
    newObject.children.push(obj);

    setSelectedParent(newObject);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Parent: {selectedParent && selectedParent.name}</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
            {parentData.map((parent) => (
              <TableRow
                style={{ cursor: "pointer" }}
                key={parent}
                onClick={() => setSelectedParent(parent)}
              >
                <TableCell align="right">{parent.name}</TableCell>
                <TableCell align="right">{parent.age}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Children</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            {selectedParent &&
              selectedParent.children.map((child) => (
                <TableRow key={child}>
                  <TableCell align="right">{child.name}</TableCell>
                  <TableCell align="right">{child.age}</TableCell>
                  <TableCell align="right">{child.price}</TableCell>
                </TableRow>
              ))}

            <TableRow>
              <TableCell align="right">
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  Add Child
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" onClick={() => sumOfPrice()}>
                  Price
                </Button>
              </TableCell>
            </TableRow>
            {sum !== -1 && (
              <TableRow>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">{sum}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {showForm && selectedParent && <Form addChild={addChild} />}
        {!selectedParent && <p>Please Select Parent</p>}
      </TableContainer>
    </>
  );
}

export default Parents;
