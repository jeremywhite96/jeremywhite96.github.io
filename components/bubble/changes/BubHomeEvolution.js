import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const BubHomeEvolution = () => {
    return ( 
    <Flicking align="prev" bound="true" panelsPerView={2.5} circular={false} onMoveEnd={e => {console.log(e);}}>
        <div className="panel mr-2 item bg-red-500 w-3/5">Image image image Image image imageImage image image</div>
        <div className="panel item mx-2 bg-red-500 w-3/5">blah blah blah blah blah blah blah blah</div>
        <div className="panel item mx-2 bg-red-500 w-3/5">boop boop boop boop boop boop boop boop</div>
  </Flicking>
     );
}
 
export default BubHomeEvolution;