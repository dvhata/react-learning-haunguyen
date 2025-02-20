import React from "react";

export default function TodoListReducer() {
  const [taskList, setTaskList] = React.useState([]);
  const [newTaskName, setNewTaskName] = React.useState<string>("");
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [editItem, setEditItem] = React.useState<any>(null);

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD":
        const { newTaskName: newTaskNameAdd } = action.payload;
        return {
          taskList: [
            ...state.taskList,
            {
              id: new Date().getTime().toString(),
              name: newTaskNameAdd,
            },
          ],
        };
      case "EDIT":
        const { id: idEdit, newTaskName } = action.payload;
        return {
          taskList: [
            ...state.taskList.map((item: any) => {
              if (item.id === idEdit)
                return {
                  ...item,
                  name: newTaskName,
                };
              return item;
            }),
          ],
        };
      case "DELETE":
        const { id: idRemove } = action.payload;
        return {
          taskList: [
            ...state.taskList.filter((item: any) => {
              return item.id !== idRemove;
            }),
          ],
        };
    }
  };

  const initialState = {
    taskList: [],
  };

  const [state, dispatch] = React.useReducer(
    reducer,
    initialState,
    () => initialState
  );

  React.useEffect(() => {
    console.log(state?.taskList ?? []);
  }, [state?.taskList]);

  return (
    <div>
      <div>
        <input
          style={{ width: 100 }}
          placeholder="Enter taskname"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          type="text"
        />
        {!isEdit ? (
          <button
            onClick={() => {
              dispatch({ type: "ADD", payload: { newTaskName } });
              setNewTaskName("");
            }}
          >
            ➕
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "EDIT",
                payload: { id: editItem.id, newTaskName: newTaskName },
              });
              setIsEdit(false);
              setNewTaskName("");
            }}
          >
            ✔
          </button>
        )}
      </div>

      <div>
        <h3>Task List</h3>
        <li>
          {state?.taskList.map((taskItem: any) => {
            return (
              <>
                <ul key={taskItem.id}>
                  <span>{taskItem.name}</span>

                  <button
                    onClick={() => {
                      setEditItem(taskItem);
                      setNewTaskName(taskItem.name);
                      setIsEdit(true);
                    }}
                  >
                    ✒
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DELETE",
                        payload: { id: taskItem.id },
                      })
                    }
                  >
                    🚽
                  </button>
                </ul>
              </>
            );
          })}
        </li>
      </div>
    </div>
  );
}
