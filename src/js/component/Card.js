import React from "react";
import image from "../../img/imagesample.jpg";

export const Card = () => {
	return (
		<div className="card">
			<img className="card-img-top" src={image} alt="Card image cap" />
			<div className="card-body p-0">
				<h5 className="card-title text-center pt-3 m-0">Card title</h5>
				<p className="card-text p-3">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>

		//remember to add double curly brackets and quotes for style = {{"18rem"}}
	);
};
//export default Card;
