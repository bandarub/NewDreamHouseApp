import React, { Component } from 'react';
import ComponentSlider from '@kapost/react-component-slider';

import image1 from '../../assets/images/slide_properties.jpg';
import image2 from '../../assets/images/slide_brokers.jpg';
import image3 from '../../assets/images/slide_favorites.jpg';

class Home extends Component {
	renderContent = () => {
		const menu = this.menuItems;
		const renderLeftArrow = () => <i className="material-icons button__content-arrow">keyboard_arrow_left</i>;
		const renderRightArrow = () => <i className="material-icons button__content-arrow">keyboard_arrow_right</i>;
		return (
			<ComponentSlider renderLeftArrow={renderLeftArrow} renderRightArrow={renderRightArrow}>
				{this.renderItems()}
			</ComponentSlider>
		);
	};
	renderItems = () => {
		const data = [
			{
				id: 1,
				note: 'Your dream is just a few taps away! Select Properties in the menu to start your search',
				image: image1
			},
			{
				id: 2,
				note: 'Select Brokers menu to connect with the best brokers in the business in a whole way!',
				image: image2
			},
			{
				id: 3,
				note: 'Keep track of your favorites and get notified in real time when important events happen.',
				image: image3
			}
		];
		return (
			<div className="items">
				{data.map((item, key) => (
					<div key={key} className="item">
						<img src={item.image} />
                        <div className="item__note">{item.note}</div>
					</div>
				))}
			</div>
		);
	};
	render() {
		return <div className="home">{this.renderContent()}</div>;
	}
}

export default Home;
