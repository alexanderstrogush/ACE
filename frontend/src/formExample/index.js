import React from "react";
import {render} from "react-dom";
import ExampleForm from "./components/ExampleForm";

function renderPage() {
    render(<ExampleForm/>, document.getElementById("root"))
}

window.onload = renderPage;