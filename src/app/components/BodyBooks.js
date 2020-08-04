import React,{Component} from "react";
import {connect} from 'react-redux';
import {execute} from '../actions/Actions';
import PropTypes from 'prop-types';


class BodyBooks extends Component{

    componentDidMount() {
         this.props.dispatch(execute('Crime%20and%20Punishment'));
    }

    render() {
        return(
            <div className="container pt-4">
                <button onClick={e=> this.props.dispatch(execute('hardcover-fiction'))}>mas libros</button>
                {
                    this.props.booksList.length !== 0 ?
                        this.props.booksList.map((v, k) =>
                            <div key={k} className="p-2">
                                <div className="row bg-light font-italic">
                                    <h3 className="mx-auto">
                                      {v.title}
                                    </h3>
                                </div>
                                <div className="row">
                                    <h4 className="mx-auto">
                                      {v.author}
                                    </h4>
                                </div>
                                <div className="row">
                                    <h5 className="mx-auto">
                                      {v.description}
                                    </h5>
                                </div>
                                <div className="row">
                                    <h6 className="mx-auto">
                                        <a href={v.url_review}target="_blank">{v.url_review}</a>
                                    </h6>
                                </div>
                            </div>



                    ) : <div>Loading...</div>
                }

            </div>
        );
    }

}


export default connect()(BodyBooks);

