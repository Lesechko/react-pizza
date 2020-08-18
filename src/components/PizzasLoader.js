import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={460}
		viewBox="0 0 280 460"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="141" cy="138" r="119" />
		<rect x="2" y="270" rx="0" ry="0" width="280" height="26" />
		<rect x="-3" y="310" rx="6" ry="6" width="280" height="84" />
		<rect x="0" y="408" rx="3" ry="3" width="99" height="40" />
		<rect x="137" y="408" rx="21" ry="21" width="133" height="40" />
	</ContentLoader>
);

export default MyLoader;
