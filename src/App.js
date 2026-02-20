import "./App.css";
import PageBoard from "./components/PageBoard/PageBoard";
import List from "./components/List/List";
import Caption from "./components/Caption/Caption";
import Ulist from "./components/Ulist/Ulist";
import Container from "./components/Container/Container";
import props from "./upcoming-events.json";

function App() {
  return (
    <div className="App">
      <Container>
        <PageBoard>
          <Caption title={"24th Core Worlds Coalition Conference"}/>
          <List >
            <Ulist prop={props}/>
          </List>
        </PageBoard>
      </Container>
    </div>
  );
}

export default App;
