import React, { useState } from "react";

import { PartDetails } from "../../model/commonModel";
import SustainmentFilter from "../sustainment-filter/SustainmentFilter";
import SustainmentContent from "../sustainment-content/SustainmentContent";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginLeft: 20,
    marginRight: 20,
  },
};
function Sustainment(props: any) {
  const [selectedPart, setselectedPart] = useState<PartDetails>({});
  const onPartSelected = (data: PartDetails) => {
    setselectedPart(data);
  };
  const { classes } = props;

  return (
    <div className={classes.root}>
      <SustainmentFilter onPartSelected={onPartSelected} />
      <SustainmentContent selectedPart={selectedPart} />
    </div>
  );
}

export default withStyles(styles)(Sustainment);
