import React from "react";
import { Redirect, Switch, Route} from "react-router-dom"
import TrelloBoardRenderer from "./routes/TrelloBoardRenderer"
import TrelloTaskRenderer from "./routes/TrelloTaskRenderer"
import Layout from "./layout"

const App = ()=> {
  return (
  <Layout>
   <Switch>
    <Route path="/" exact render={() => <Redirect to="/trello/dashboard"/>}/>
    <Route path='/trello/dashboard' component={TrelloBoardRenderer}/>
    <Route path='/trello/task/:boardId' component={TrelloTaskRenderer} />
    <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
    </Layout>

  );
}

export default App;
