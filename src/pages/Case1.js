import {
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchAppBar from "../components/AppBar/SearchAppBar";
import TableFruitType from "../components/Table/TableFruitType";

function Case1() {
  function createData(
    fruitId: number,
    fruitName: string,
    fruitType: "IMPORT" | "LOCAL",
    stock: number
  ) {
    return { fruitId, fruitName, fruitType, stock };
  }

  const rows = [
    createData(1, "Apel", "IMPORT", 10),
    createData(2, "Kurma", "IMPORT", 20),
    createData(3, "apel", "IMPORT", 50),
    createData(4, "Manggis", "LOCAL", 100),
    createData(5, "Jeruk Bali", "LOCAL", 10),
    createData(6, "KURMA", "IMPORT", 20),
    createData(7, "Salak", "LOCAL", 15),
  ];

  return (
    <>
      <SearchAppBar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Fruit Name</TableCell>
                <TableCell>Fruit Type</TableCell>
                <TableCell>Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.fruitId}</TableCell>
                  <TableCell>{row.fruitName}</TableCell>
                  <TableCell>{row.fruitType}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box>
          <Typography>
            1. Buah apa saja yang dimiliki Andi? (fruitName)
          </Typography>
          <List dense>
            {rows.map((row) => (
              <ListItem>
                <ListItemText primary={row.fruitId} />
                <ListItemText primary={row.fruitName} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography>
            2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe
            buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah
            apa saja di masing-masing wadah?
          </Typography>
          <Typography>
            3. Berapa total stock buah yang ada di masing-masing wadah?
          </Typography>

          <TableContainer>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableFruitType rows={rows} fruitType="LOCAL" />
            </Table>
          </TableContainer>
          <TableContainer>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableFruitType rows={rows} fruitType="IMPORT" />
            </Table>
          </TableContainer>

          <Typography>4. Apakah ada komentar terkait kasus di atas?</Typography>
          <Typography>-</Typography>
        </Box>
      </Container>
    </>
  );
}

export default Case1;
