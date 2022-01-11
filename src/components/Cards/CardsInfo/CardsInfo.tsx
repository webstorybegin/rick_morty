import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: '200px auto',
  }
})

export const CardsInfo = () => {
  let [info, setInfo] = useState([]);
  let { id } = useParams();

  let { name, species, gender, location, status, created }: any = info;

  let _apiInfo = `https://rickandmortyapi.com/api/character/${id}`;
  let _episode = `https://rickandmortyapi.com/api/episode/${id}`;
  let updEpisode = _episode.slice(40)

  useEffect(() => {
    const getInfo = async () => {
      let res = await axios.get(_apiInfo);
      setInfo(res.data);
    }

    getInfo();
  }, [])

  const styles = useStyles()

  return (
    <Card className={styles.root} >
      <CardHeader title={`Name: ${name}`} />
      <CardHeader subheader={`Species: ${species}`} />
      <CardHeader subheader={`Gender: ${gender}`} />
      <CardHeader subheader={`Location: ${location?.name}`} />
      <CardHeader subheader={`Episode: ${updEpisode}`} />
      <CardHeader subheader={`Status: ${status}`} />
      <CardHeader subheader={`Created: ${created}`} />
    </Card>
  )
}