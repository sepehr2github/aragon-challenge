import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux'
import {GetCryptoList} from '../../Api/Api'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:'#262637',
    color:'#fffff'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CryptoList() {
    const List = useSelector(state => state.data.CryptoList)
    if(List.length === 0){
        // GetCryptoList();
    }
    const classes = useStyles();
    console.log('Listed',List)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'white'}}>Name</TableCell>
            <TableCell  style={{color:'white'}} align="center">Price (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {List.data.map((row,index) => (
            <TableRow key={index}>
              <TableCell  style={{color:'white'}}>{row.name}</TableCell>
              <TableCell  style={{color:'white'}} align="center">{row.quote['USD'].price}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}