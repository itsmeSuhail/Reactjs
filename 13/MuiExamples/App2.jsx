
import  {Button,Box, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Typography} from "@material-ui/core"
import { Delete, Mail } from "@material-ui/icons"
import React from 'react'
import { Table } from "react-bootstrap"

const App = () => {
  return <>
  <Button variant="text"
  startIcon={<Mail/>}
  >Click</Button>
  <Box m={10}>All</Box>
  <Box mt={10}>All</Box>
  <Box ml={10}>All</Box>
  <Box mr={10} width={70} height={70} borderRadius={"50%"}  border={1}  borderColor="green" >All</Box>
{/* table */}
<TableContainer>
  <Table bordered>
    <TableHead>
      <TableRow>
        <TableCell>No1</TableCell>
        <TableCell>No2</TableCell>
        <TableCell>No3</TableCell>
        <TableCell>No4</TableCell>
        <TableCell>No5</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
      <TableCell>No1</TableCell>
      <TableCell>No2</TableCell>
      <TableCell>No3</TableCell>
      <TableCell>No4</TableCell>
      <TableCell>No5</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
<IconButton>
  <Delete/>
</IconButton>
{/* typograpy */}
<h1>typograpy</h1>
<Typography variant="body2">Body2</Typography>
<Typography variant="h6">h6</Typography>
<Typography variant="h1">h1</Typography>
<Typography variant="subtitle1">subtitle1</Typography>
<Typography variant="subtitle2">Subtitl2</Typography>
<Typography variant="body1">Body1</Typography>

  </>
}

export default App