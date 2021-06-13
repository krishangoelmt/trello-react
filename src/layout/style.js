import Styled from "styled-components"
import { Layout } from 'antd';
import backgroundImage from "../assests/background.jpg"
import logo from "../assests/logo.gif"

const StyledTrelloLayout = Styled(Layout)`

.ant-layout-header{
    background: #026AA7;
    display: flex;
    align-items: center;
    position: relative;
}
.ant-menu-dark.ant-menu-horizontal{
    background: #026AA7;
}
.ant-layout-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
}
.ant-layout-content {
    height: calc(100vh - 98px);
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 24px 12px 0 12px;
}
.logo{
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 125px;
    margin-right: 24px;
    height: 36px;
}
.ant-layout-footer{
    padding: 6px 50px;
}

.display-board-name{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    color: white;   
}
`;


export default StyledTrelloLayout