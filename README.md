##### Step to intall this app
1. Clone this app from Github git@github.com:krishangoel21/trello-react.git
1.  Install Yarn
1. Open your termial and hint command  "**Yarn start**"


### Contract that we need from backend 
we need CURD operation for Board, List, Task
1. GET /boards → returns a list of all board that related to company or user
1. GET /all-list → returns a list of all status for the particular board
1. GET /tasks → returns a list of tasks  related to particular board
1. POST /board → for create a new board
1. DELETE /board → for delete a particular board
1. UPDATE /board → for update a single board (name, info)
1. POST /list → for create new list
1. DELETE /list → for delete list
1. UPDATE /list → for update list
1. POST /task → for create new task
1. DELETE /task → for delete task
1. UPDATE/task  → for update task
1. GET/users → need all user those are related to that particular board
1. UPDATE/user → change user from particular task
1. DELETE/user → delete user for particular board
