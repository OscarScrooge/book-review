import React,{Component} from "react";

export default class Header extends Component{

    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1 mx-auto">Books list</span>
                </nav>
            </div>
        );
    }

}
