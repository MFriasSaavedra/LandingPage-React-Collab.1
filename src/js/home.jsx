import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";


const cardInfo = [
	{
		url: "https://picsum.photos/id/237/350/200",
		title: "Little Black Puppy",
		text: "Happiness is a warm puppy. -Charles M. Schulz"

	},
	{
		url: "https://picsum.photos/id/217/350/200",
		title: "Old lake pier",
		text: "So lovely was the loneliness of a wild lake. -Edgar Allan Poe"
	},
	{
		url: "https://picsum.photos/id/233/350/200",
		title: "Train travel",
		text: "The journey of a thousand miles begins with a single step. -Lao Tzu"
	},
	{
		url: "https://picsum.photos/id/222/350/200",
		title: "Cloudy day",
		text: "No one is free, even the birds are chained to the sky. -Bob Dylan"
	}
];







const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />


		</div>
	);
};

export default Home;



{/*<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Card url={"https://picsum.photos/id/237/350/200"} title={"Little Black Puppy"} text={"Happiness is a warm puppy. Charles M. Schulz"} />
					</div>
					<div className="col-md-3">
						<Card url="https://picsum.photos/id/217/350/200" title={"Old lake pier"} text={"So lovely was the loneliness of a wild lake.- Edgar Allan Poe"} />
					</div>
					<div className="col-md-3">
						<Card url="https://picsum.photos/id/233/350/200" title={"Train travel"} text={"The journey of a thousand miles begins with a single step.- Lao Tzu"} />
					</div>
					<div className="col-md-3">
						<Card url="https://picsum.photos/id/222/350/200" title={"Cloudy day"} text={"No one is free, even the birds are chained to the sky.-Bob Dylan"} />
					</div>
				</div>
			</div>
  */}