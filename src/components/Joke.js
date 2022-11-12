import React from "react";
// import tryImage from "../images/tryImage.jpg";

export default function Jokes(props){
    // console.log(props);
    // const nums = [1, 2, 3, 4, 5];
    // const squared = nums.map(function (item){
    //     return item * item;
    // });
    // console.log(squared);

    // const names = ["alice", "bob", "charlie", "danielle"];
    // const firstCaped = names.map(function(item){
    //     console.log(item.charAt(0).toLocaleUpperCase() + item.slice(1));
    // })

    
    // console.log(elements);
    return(
        <div className="card col-sm-3">
                    <img src={props.img} class="rounded float-start" alt="here"/>

            <div className="card-body">
                {/* {props.setup && <h5 className="card-title">{props.setup}</h5>} */}
                <h5 style={{display: props.setup ? "block": "none" }}className="card-title">{props.setup}</h5>

                <p className="card-text">{props.punchline}</p>
                <span className="card-footer">{props.isPun}</span>
                {/* <a href="#" className="btn btn-primary">{props.punchline}</a> */}
            </div>
        </div>
    )
}