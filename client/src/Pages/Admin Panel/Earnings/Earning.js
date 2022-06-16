//Import Earning Page Components
import Grid from "./Grid";
import Tiles from "./Tiles";
import Transction from "./Transaction";

//Export Earning Page
const Earnings = () => {
  return (
    <div className="container mx-auto px-4">
      <br></br>
      <h1 className="font-bold mt-3 text-3xl italic">Earnings...</h1>
      <br></br>
      <Tiles />
      <Grid />
      <Transction />
    </div>
  );
};

export default Earnings;
