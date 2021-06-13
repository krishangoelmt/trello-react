import { Layout } from 'antd';
import { Link } from 'react-router-dom'

import AddBoard from "../components/AddBoard"
import BoardName from "../components/BoardName"
import StyledTrelloLayout from "./style"

const { Header, Content, Footer } = Layout;

const TrelloLayout = (props) => {
    return ( 
        <StyledTrelloLayout>
        <Header>
            <Link to={"/"}>
            <div className="logo" />
            </Link>
          <AddBoard {...props}/>
          <BoardName {...props}/>
        </Header>
        <Content className="site-layout">
            {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Trello Design ©2021</Footer>
      </StyledTrelloLayout>
     );
}
 
export default TrelloLayout;