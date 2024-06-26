import React from "react";
import {
  withStyles,
  Grid,
  Tab,
  Tabs,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Icon
} from "@material-ui/core";
import theme from "Theme";
import { Charts } from "@markab.io/orbital-templates";
const Stats = ({ model_count, model_form, modelName, query, field }) => {
  const periods = ["daily", "monthly", "yearly"];
  // query={{
  //   $or: [{ from: user._id }, { to: user._id }]
  // }}
  const [count, setCount] = React.useState([]);
  const [period, setPeriod] = React.useState(0);
  React.useEffect(() => {
    model_count({}, periods[period]).then(data => {
      setCount(data);
    });
  }, [period]);
  return (
    <Grid container>
      <Card>
        <CardContent>
          <Grid style={{ marginBottom: "5em", marginLeft: "auto" }} item>
            <Tabs onChange={(event, value) => setPeriod(value)} value={period}>
              {periods.map(label => (
                <Tab label={label}></Tab>
              ))}
            </Tabs>
          </Grid>
          <Grid item>
            {count && (
              <Charts.CountChart
                label={`${modelName} created over time`}
                count={count}
              />
            )}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Stats;
