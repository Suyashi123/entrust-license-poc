import Grid from "@mui/material/Grid";
import { CustomCard, CustomCardContent } from "..";
import CustomCardHeader from "./../../../../Components/CustomCard/CustomCardHeader";
import CustomCardRow from "./../../../../Components/CustomCard/CustomCardRow";

const CustomerCard = ({ data }) => {
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title="Customer" />
        <Grid item container xs direction="column">
          <CustomCardRow title="Name" value={data.name} mb={0} />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CustomerCard;