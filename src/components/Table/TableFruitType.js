import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export default function TableFruitType({ rows, fruitType }) {
  //   const [stock, setStock] = useState();

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>{fruitType}</TableCell>
          <TableCell>Stock</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <>
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.fruitType === fruitType ? (
                <>
                  <TableCell>{row.fruitName}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                </>
              ) : (
                ""
              )}
            </TableRow>
          </>
        ))}
      </TableBody>
      {rows.map((row) => (
        <Typography></Typography>
      ))}
    </>
  );
}
