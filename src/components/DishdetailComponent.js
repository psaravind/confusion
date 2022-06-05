import React, { Component } from 'react';
import { Card, CardText, CardImg, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    formatedDate(date) {
        var dt = new Date(date);
        let monthNames =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        var day = dt.getDate() + 1
        var formatted =
            monthNames[dt.getMonth()] + " " +
            (day < 10 ? "0" : "") + day + ", "  +
            dt.getFullYear();
        return formatted;
    }

    renderComments(comments) {
        if (comments != null) {
            return <div> 
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {this.formatedDate(comment.date)}</li>
                            <br/>
                        </div>
                    )
                })   
            }
            </div>
        }
        else {
            return <div></div>
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return <>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><h4>{dish.name}</h4></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>                    
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card className="border-0">
                        <CardBody>
                            <CardTitle>
                                <h4>Comments</h4>
                            </CardTitle>
                            <div>
                                <ul className="list-unstyled">
                                    {this.renderComments(dish.comments)}
                                </ul>
                            </div>
                        </CardBody>                                            
                    </Card>
                </div>
            </>
        }
        else {
            return <div></div>
        }
    }
}

export default DishDetail;