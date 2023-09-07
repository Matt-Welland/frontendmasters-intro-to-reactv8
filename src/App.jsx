import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
    <div>
        <h1>Adopt me!</h1>
        <Pet name={"Luna"} animal={"Dog"} breed={"Havanese"} />
        <Pet name={"Pepper"} animal={"Bird"} breed={"Cockatiel"} />
        <Pet name={"Doink"} animal={"Cat"} breed={"Mixed"} />
    </div>;
};

// Render to the root which is outputted to the DOM by ReactDOM
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
