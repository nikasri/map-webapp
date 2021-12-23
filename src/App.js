import './App.css';
import MapContainer from "./component/MapContainer";
import RecentComponent from "./component/RecentComponent"
import { useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux"
import { actionCreators }  from "./state/index"

function App() {

  // Accessing data inside redux store
  const search = useSelector((state) => state.search);
  const search2 = ["KUL", "KBR", "PEN"]

  console.log("Store: ",search)
  const dispatch = useDispatch();

  // binding all the actions creators to the dispatch
  const {searchAction} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <RecentComponent recent={search} />
      {/* Render MapContainer while also passing the searchAction action creator  as props */}
      <MapContainer action={searchAction}/>

    </div>
  );
}

export default App;
