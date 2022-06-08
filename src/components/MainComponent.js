import React, {Component} from "react";
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS  } from '../shared/promotions';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {
        const DishWithId = ({match}) => {
            const { dishId } = useParams();

            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]} 
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
            );
        }

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
                />
            );
        }
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
                    <Route path="/aboutus" element={<About leaders={this.state.leaders} />} />
                    <Route path="/menu/:dishId" element={<DishWithId />} />
                    <Route exact path="/contactus" element={<Contact />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;