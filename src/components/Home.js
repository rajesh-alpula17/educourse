import * as React from 'react';
import logo from '../logo.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { axiosInstance, GET_BATCHES , STUDENTS} from '../api';

export default function Home() {

  const [coursesList, setCoursesList] = React.useState([]);
  React.useEffect(() => {
    axiosInstance.get(STUDENTS, {})
      .then((response) => {
        setCoursesList(response.data);
        
      })
      .catch((error) => {
        
      });

  },[])
  return (
    <>
      <div className="container">
        <div className="float-end text-right"><a href="">Load More</a></div>
        {coursesList.map(batch => (
          <div className="card mb-3 col-md-8" key={batch.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={logo} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{batch.name}</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}