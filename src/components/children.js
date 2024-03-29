import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Children() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
            <TableCell align="right">Vineet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
