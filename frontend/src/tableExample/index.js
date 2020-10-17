import React from "react";
import {render} from "react-dom";
import AlexTable from "./components/AlexTable";

function renderPage() {
    render(<AlexTable/>, document.getElementById("root"))
}

window.onload = renderPage;