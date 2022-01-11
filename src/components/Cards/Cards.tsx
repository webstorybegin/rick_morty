import { useState } from 'react';
import { Link } from "react-router-dom";

import { 
  Card, 
  CardHeader, 
  CardMedia, 
  Grid 
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import cn from 'classnames';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    margin: 5,
    position: 'relative',
    boxShadow: '1px 1px 3px 3px #000'
  },
  media: {
    height: 250,
  },
  span: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%',
    textAlign: 'center',
    fontSize: 15,
    padding: 2,
 
  
    textTransform: 'uppercase',
  },
  alive: {
    background: '#098545'
  },
  dead: {
    background: '#c94c4c'
  },
  unknow: {
    background: '#e3e0cc'
  }
});

export const Cards = ({ page, results }) => {
  const [like, setLike] = useState('black');
  const [isBlack, setIsBlack] = useState(true);
  const styles = useStyles();
  let content;

  const handleChangeColor = (e) => {
    setIsBlack(!isBlack)
    setLike(isBlack ? 'red' : 'black')
  }

  if (results) {
    content = results.map((item) => {
      let { id, status, image, name } = item;

      return (
        <Grid key={id} item xs={4}>
          <Link to={`${page}${id}`}>
            <Card className={styles.root}>
              <CardMedia className={styles.media} image={image} />
              <CardHeader title={name} />
              {(() => {
                if (status === 'Alive') {
                  return (
                    <span className={cn(styles.span, styles.alive)}>
                      {status}
                    </span>
                  )
                } else if (status === 'Dead') {
                  return (
                    <span className={cn(styles.span, styles.dead)}>
                      {status}
                    </span>
                  )
                } else {
                  return (
                    <span className={cn(styles.span, styles.unknow)}>
                      {status}
                    </span>
                  )
                }
              })()}
            </Card>
          </Link>
        </Grid>
      );
    });
  }

  return (
    <Grid container direction="row">
      {content}
    </Grid>
  );
};
