import styles from "./ProjectUpdate.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectUpdate() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((resp) => resp.json())
    .then((data) => {
      setProject(data);
    })
    .catch((err) => console.log("erro: " + err));
  }, [id]);
  //   nessa caso o [id] mostra que o id é a refenrencia do useEffect

  return <p>{project.name}</p>;
}

export default ProjectUpdate;
