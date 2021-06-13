import Styled from "styled-components";

const StyledRenderList = Styled.div`
display: flex;
align-items: flex-start;
 flex-direction: row;
.dl-card-list{
    width:300px;
    margin-right: 12px;
}
.dl-card-list{
    background: #f5f6f7;
}
.dl-card-list .ant-card-body{
    padding: 12px;
    background: #f5f6f7;
}

.ul-items{
    list-style: none;
    padding-left: 0;
    height:calc(100vh - 290px);
    overflow-x: auto;
.list-item{
   display: flex;
    align-items: center;
    border: solid 2px #0369a7;
    border-radius: .2em;
    padding: .5em .8em .5em .5em;
    margin-bottom: .5em;
    margin-top: .5em;
    background: #0369a7;
    color: white;
    cursor:pointer;
}
.user-pic{
   display: block;
    width: 100%;
    height: auto;
}

.characters-thumb {
    overflow: hidden;
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    background-color: #e8e8e8;
    padding: .5em;
    margin-right: .5em;
}
}

`;

export default StyledRenderList;
