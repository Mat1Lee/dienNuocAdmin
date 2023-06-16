import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { GIA_DIEN_1,GIA_NUOC1 } from '../../context/redux/types/AdminTypes';

function Row(props) {
  
  const { row } = props;
  //
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        {/* <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Số điện</TableCell>
                    <TableCell align="right">Số nước</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history?.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.Dien}</TableCell>
                      <TableCell align="right">{historyRow.Nuoc}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.Dien*GIA_DIEN_1 + historyRow.Nuoc*GIA_NUOC1) + ' Nghìn(VND)'  }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable(props) {
  // console.log(props);

  const createData=(name, calories, price, index)=> {
    
        return {
      name,
      calories,
      price,
      history: props.data[index]
    };
 
    
  }
  const rows = [
    createData('Thang 1', 159, 6.0, 0 ),
    createData('Thang 2', 237, 9.0, 1, ),
    createData('Thang 3', 262, 16.0, 2),
    createData('Thang 4', 305, 3.7, 3 ),
    createData('Thang 5', 159, 6.0, 0 ),
    createData('Thang 6', 237, 9.0, 1, ),
    createData('Thang 7', 262, 16.0, 2),
    createData('Thang 8', 305, 3.7, 3 ),
    createData('Thang 9', 159, 6.0, 0 ),
    createData('Thang 10', 237, 9.0, 1, ),
    createData('Thang 11', 262, 16.0, 2),
    createData('Thang 12', 305, 3.7, 3 ),
   
  ];
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            {/* <TableCell align="right">Tổng số điện nước</TableCell>
            <TableCell align="right">Số điện</TableCell>
            <TableCell align="right">Số Nước</TableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
