import React from 'react';
import ReactPlayer from 'react-player';

function SmallVideo(props) {
	return (
		<div style={{ margin: '0 0 40px 0' }}>
			<ReactPlayer height={'250px'} width={'400px'} url={props.url} />
			<div style={styles.title}>{props.title}</div>
			<div style={styles.caption}>{props.caption}</div>

		</div>
	);
}

const styles = {
	title: {
		fontWeight: 'bold'
	},
	caption: {
		width: '100%',
		borderBottom: '1px solid black',
		padding: '1px 0 3px 0'
	}
};

export default SmallVideo;
