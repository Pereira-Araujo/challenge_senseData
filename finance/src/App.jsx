import PagesPaths from "./routes/routes";
import GlobalState from "./global/GlobalState";
/*
{	"email": "sense@data.com",
 	"password": "testando123"
 }
*/
function App() {
  return (
    <GlobalState>
      <PagesPaths />
    </GlobalState>
  );
}

export default App;
