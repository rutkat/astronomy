import React from 'react';

const PhotoContainer = (props) => {
	const { imgData } = props;
	
	const renderMedia = () => {
		if (imgData === null) {
			return (<img className="ul medium bordered image" 
									 src="https://semantic-ui.com/images/wireframe/image.png" 
									 width="500"
									 height="500"
									 alt="placeholder" />);
		} 
		if (imgData.url.indexOf('vimeo') !== -1) {
			return (
				<>
				  <h2>{imgData.title}</h2>
				  <iframe src={imgData.url} title={imgData.title} width="640" height="360" />
				  <p>Source: {imgData.url}</p>
				</>
			);
		}
		else {
			return (
				<>
				  <img className="ui bordered centered image" src={imgData.url} alt={imgData.title} />
				  <p>Source: {imgData.url}</p>
				</>
			);
		}
	}
	
	return (
		<div className="ui padded container">
			{renderMedia()}
		</div>
	)
}
export default PhotoContainer;