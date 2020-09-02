import React from "react";

const Card = () => {
	return (
		// <div className="container">
		// 	<div className="card" style={{ width: "18rem" }}>
		// 		<img className="card-img-top" src=" " alt="Card image cap" />
		// 		<div className="card-body">
		// 			<h5 className="card-title">Card title</h5>
		// 			<p className="card-text">
		// 				Some quick example text to build on the card title and
		// 				make up the bulk of the card's content.
		// 			</p>
		// 			<div className="card-footer">
		// 				<a href="#" className="btn btn-primary">
		// 					Find Out More!
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="container">
			<div className="card-deck">
				{/* card 1  */}
				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>

				{/* card 2 */}
				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>

				{/* card 3 */}

				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>

				{/* card 4 */}

				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
				{/* end of cards */}
			</div>
		</div>
	);
};
export default Card;
