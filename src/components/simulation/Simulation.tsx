import React, { useState } from "react";
import "./Simulation.css";

import Filter from "../filter/Filter";
import SearchContent from "../simulation-content/SearchContent";
import { PartDetails } from "../../model/commonModel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginLeft: 20,
    marginRight: 20,
  },
};
function Simulation(props: any) {
  const [selectedPart, setselectedPart] = useState<PartDetails>({});
  const onPartSelected = (data: PartDetails) => {
    setselectedPart(data);
  };
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Filter onPartSelected={onPartSelected} />
      <SearchContent selectedPart={selectedPart} />
    </div>
  );
}

export default withStyles(styles)(Simulation);
