import {useState} from 'react'
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const url = 'http://localhost:5000/';
  const [disState, setdisState] = useState(false);
  const navigate = useNavigate();
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Computing Results</h1>
        <hr />

        <Formik
          initialValues={{ search: "", limit: 0, minLikes: 0, months: 0, city: "", radius: 0 }}
          onSubmit={async (values) => {
            
            const res = await axios.post(url, values);
            const {data} = res;
            localStorage.setItem('myData', JSON.stringify(data));
            setdisState(true);
            setTimeout( () => {
              navigate('/contact');
              
              setdisState(false);
            }, [60000]);
            

          }}
        >
          <Form>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <div><label htmlFor="search">Search</label>
                  <Field name="search" type="text" /></div>
              </Grid>
              <Grid item xs={6}>
                <div><label htmlFor="city">Center City</label>
                  <Field name="city" type="text" /></div>
              </Grid>
              <Grid item xs={6}>
                <div><label htmlFor="limit">Limit</label>
                  <Field name="limit" type="number" /></div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <label htmlFor="minLikes">Min Likes</label>
                  <Field name="minLikes" type="number" /></div>
              </Grid>
              <Grid item xs={6}>
                <div>

                  <label htmlFor="months">Months</label>
                  <Field name="months" type="number" /></div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <label htmlFor="radius">Radius</label>
                  <Field name="radius" type="number" /></div>
              </Grid>
              <Grid item xs={12}>
                <div >

                  <Button disabled={disState} variant="contained" type="submit">Compute</Button>
                </div>
              </Grid>
            </Grid>

          </Form>
        </Formik>
      </Grid>
    </Grid>
  </>;
};

export default Home;
