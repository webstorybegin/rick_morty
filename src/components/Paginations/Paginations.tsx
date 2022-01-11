import { Stack, Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paginationsContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export const Paginations = ({ info, page, paginate }) => {
  const { pages } = info || {};
  const styles = useStyles();

  return (
    <Stack spacing={2}>
      <Pagination
        className={styles.paginationsContainer}
        variant="outlined"
        shape="rounded"
        count={pages}
        page={page}
        onChange={(_, num) => paginate(num)}
      />
    </Stack>
  );
};
