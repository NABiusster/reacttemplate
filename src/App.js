import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";
import "./App.css"

const App = () => {
    return (
        <div className={"Container"}>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export default App;