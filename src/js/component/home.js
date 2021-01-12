import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component

export const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />

			<div className="container">
				<div className="row">
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
				</div>
			</div>
			<br />

			<Footer />
		</div>
	);
};
