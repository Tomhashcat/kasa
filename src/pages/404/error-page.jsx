import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import "./_Error.scss"
export default function ErrorPage() {
 

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
     <Link to ="/" element={<Home />}>voulez vous revenir à l'acceuil ?</Link>
      
    </div>
  );
}