import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { PartDetails } from "../../model/commonModel";
const styles = {
  root: {
    margin: 10,
  },
  cardRoot: { padding: "10px", border: "1px solid #e1e1e1" },
  cardContainer: {
    width: 570,
    height: 520,
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 400,
    color: "#c1c1c1",
  },
  dropdown: {
    fontSize: "12px !important",
    padding: "15px !important",
    borderRadius: "2px !important",
    color: "white !important",
    background:
      "linear-gradient(180deg, rgba(0,131,131,1) 0%, rgba(0,26,26,1) 112%)",
  },
  dropdownWraper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "1.5rem",
  },
};

function SearchContent(props: any) {
  const { classes } = props;
  const [state, setState] = useState({ ...props.selectedPart });
  useEffect(() => {
    setState(props.selectedPart);
  }, [props.selectedPart]);

  const creatCard = (selectedPart: PartDetails) => {
    if (selectedPart.product) {
      return selectedPart.product.map((item: any) => (
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="520"
              width="570"
              image={item.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button variant="contained">Button</Button>
              <Button variant="outlined">Button</Button>
            </CardActions>
          </Card>
        </Grid>
      ));
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      {state.product ? (
        <div className={classes.dropdownWraper}>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.dropdown}
          >
            Hardware Requirment List HRL
          </Button>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.dropdown}
          >
            Cost Bill of Matarial CBOM
          </Button>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.dropdown}
          >
            Engineering Bill of Matarial EBOM
          </Button>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.dropdown}
          >
            Manufacturaing Bill of Matarial MBOM
          </Button>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            className={classes.dropdown}
          >
            Sustainment Bill of Matarial SBOM
          </Button>
        </div>
      ) : null}
      <Grid container spacing={4}>
        {creatCard(state)}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SearchContent);
