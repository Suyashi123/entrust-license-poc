import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/styles";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { AppContext } from "./../../../App";

export const CustomCard = styled(Card)(() => ({
  marginBottom: "1vh",
  backgroundColor: "transparent !important",
  boxShadow: "none !important",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

function createData(feature, currentSetting, originalSetting) {
  return { feature, currentSetting, originalSetting };
}

const rows = [
  createData("Central Issuance Smart Card", "Off", "Off"),
  createData("Ice cream sandwich", "Off", "Off"),
  createData("Eclair", "Off", "Off"),
  createData("Cupcake", "Off", "Off"),
  createData("Gingerbread", "Off", "Off"),
];

const licenseKeys = ["Plus", "Professional", "Enterprise"];
const label = { inputProps: { "aria-label": "Switch demo" } };

const FeatureDetails = (props) => {
  const { state, setState } = useContext(AppContext);
  const [alignment, setAlignment] = useState("Professional");
  const changeProductKey = (newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid item container direction="column" {...props}>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Product Edition</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              Pick the edition to batch edit the product features
            </Typography>
          </Grid>

          <ToggleButtonGroup
            exclusive
            aria-label="text alignment"
          >
            <Stack spacing={3} direction="row">
              {licenseKeys.map((key) => (
                <ToggleButton
                  value={key}
                  aria-label="centered"
                  key={key}
                  selected={key === alignment}
                  onClick={(e) => {
                    changeProductKey(e.target.value)
                    setState({
                      ...state,
                      feature: { edition: e.target.value },
                    });
                  }}
                >
                  {key}
                </ToggleButton>
              ))}
            </Stack>
          </ToggleButtonGroup>
        </CustomCardContent>
      </CustomCard>
      <CustomCard>
        <CustomCardContent>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 600 }}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Feature</TableCell>
                  <TableCell>Current Setting</TableCell>
                  <TableCell>Original Setting</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.feature}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.feature}
                    </TableCell>
                    <TableCell align="left">
                      <Switch {...label} />
                    </TableCell>
                    <TableCell align="left">{row.originalSetting}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default FeatureDetails;
