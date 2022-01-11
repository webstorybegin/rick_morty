import { useState, useEffect } from "react";
import axios from "axios";
// import FacebookLogin from "react-facebook-login";
import { Cards } from "components/Cards/Cards";
import { Paginations } from "components/Paginations/Paginations";
import { Loader } from "components/Loader/Loader";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "0 auto",
    paddingBottom: 20,
  },
  loading: {
    textTransform: "uppercase",
    fontSize: 25,
    marginTop: 300,
    textAlign: "center",
  },
  h1: {
    fontSize: 45,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loader: {
    textAlign: "center",
    marginTop: "300px",
  },
  pagination: {
    marginBottom: 20,
  },
});

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { info, results }: any = data;

  let _api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      let res = await axios.get(_api);
      setTimeout(() => {
        setData(res.data);
        setLoading(false);
      }, 500);
    };

    getCards();
  }, [page]);

  const paginate = (pages) => setPage(pages);

  const responseFacebook = (response) => {
    console.log('login', response);
  }

  const componentClicked = (data) => {
    console.warn(data)
  }

  const styles = useStyles();

  return loading ? (
    <div className={styles.loader}>
      <Loader />
    </div>
  ) : (
    <div className={styles.root}>
      {/* <FacebookLogin
        appId="3079179198967425"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        size="small"
      /> */}
      <Paginations paginate={paginate} info={info} page={page} />
      <Cards page="/" results={results} />
    </div>
  );
};
