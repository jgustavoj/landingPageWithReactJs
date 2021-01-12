import React from "react";
import PropTypes from "prop-types";
import image from "../../img/imagesample.jpg";

export const Card = props => {
	return (
		<div className="card m-2">
			<img className="card-img-top" src={image} alt="Card image cap" />
			<div className="card-body p-0">
				<h5 className="card-title text-center pt-3 m-0">
					{props.title}
				</h5>
				<p className="card-text p-3">{props.text}</p>
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

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
