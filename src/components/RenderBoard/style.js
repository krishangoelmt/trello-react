import Styled, {css} from "styled-components"

const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`

const StyledRenderBoardList = Styled.div`
    padding: 32px;
    overflow-x: hidden;
&::before{
    content: "";
    clear:both;
    display:table;
}
.dl-card{
    width:250px;
    float:left;
    margin: 12px;
}

.board-name{
  color: #606369;
  font-size: 14px;
  line-height: 20px;
  ${ellipsis}
}
.des-name{
  color: #606369;
  font-size: 14px;
  line-height: 20px;
  ${ellipsis}
}
.footer{
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 24px
}
.heading{
    margin-right:5px;
}
`;

export default StyledRenderBoardList