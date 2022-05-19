import React from "react";
import './style.css'


//Arrow function
// propiedad children, los hijos del elemento
// const ListOption = ({ children, tiempo }) => {
//     console.log(tiempo);
//     return (
//         <li>{children} {tiempo}</li>
//     )
// }


const ListOption = (props) => {
    console.log(props);
    return (
        <li {...props} >{props.children} {props.tiempo}</li>
    )
}
export default ListOption;