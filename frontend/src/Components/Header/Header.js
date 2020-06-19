import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

export default function Header() {
  return (
    
      <div className="nav">
        <ul>
          <li> <Link to="/">Desafio 1</Link></li>
          <li> <Link to="/desafio2">Desafio 2</Link></li>
          <li> <Link to="/desafio3">Desafio 3</Link></li>
          <li> <Link to="/desafio4">Desafio 4</Link></li>
        </ul>
      </div>
    

  );
}; 