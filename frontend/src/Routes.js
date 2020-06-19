import React from "react";
import {Switch, Route } from "react-router-dom";

import Desafio1 from "./pages/Desafio1/index";
import Desafio2 from "./pages/Desafio2/index";
import Desafio3 from "./pages/Desafio3/index";
import Desafio4 from "./pages/Desafio4/index";


export default function Routes() {
    return(
     
            <Switch>
                <Route path="/" exact component={Desafio1} />
                <Route path="/desafio2" exact component={Desafio2} />
                <Route path="/desafio3" exact component={Desafio3} />
                <Route path="/desafio4" exact component={Desafio4} />
            </Switch>
     
    )
}