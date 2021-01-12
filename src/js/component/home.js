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
						<Card
							title="This is prop 1"
							text="This is an example of text passed as a prop in card 1"
						/>
					</div>
					<div className="col-sm">
						<Card
							title="This is prop 2"
							text="This is an example of text passed as a prop in card 2"
						/>
					</div>
					<div className="col-sm">
						<Card
							title="This is prop 3"
							text="This is an example of text passed as a prop in card 3"
						/>
					</div>
					<div className="col-sm">
						<Card
							title="This is prop 4"
							text="This is an example of text passed as a prop in card 4"
						/>
					</div>
				</div>
			</div>
			<br />

			<Footer />
		</div>
	);
};
