import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const MyTable = (props) => {

  const { data } = props;
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell align="left">Trend Score</TableCell>
            <TableCell align="left">Media Links</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((el, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{
                boxShadow: 1
              }} component="th" scope="row">
                {el.value}
              </TableCell>
              <TableCell sx={{
                boxShadow: 1
              }} align="right">{el.c}</TableCell>
              <TableCell sx={{ padding: 0 }} align="right">
                {el.items.map((link, j) => (<>
                  <Box sx={{
                    boxShadow: 1,
                    padding: ".5rem"

                  }} key={j} align="right">
                    <a target="blank" href={link} >{link}</a>
                  </Box>
                </>
                ))}

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>;
};

export default MyTable;
