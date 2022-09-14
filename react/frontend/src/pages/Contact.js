import { Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import MyTable from './MyTable';

const Contact = () => {
  const [jsonData, setJsonData] = useState();
  useEffect(() => {
    let data = localStorage.getItem('myData');
    console.log("data", data);
    if (data !== undefined) {
      setJsonData(JSON.parse(data));
    }
  }, []);


  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Results</h1>
        <hr />
        {jsonData ? <>
          <div>
            <strong>Color Table</strong>
          <MyTable data={jsonData.color} />
          <br />
          <strong>Pattern Table</strong>

          <MyTable data={jsonData.pattern} />
          <br />
          <strong>Rekog Table</strong>

          <MyTable data={jsonData.rekog} />
          </div>
        </> : <></>}
      </Grid>
    </Grid>
  </>;
};

export default Contact;
