import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videoStyles: styles.smallVideo,
			containerstyles: styles.container
		};
	}

	expandVideo = () => {
		this.setState({
			videoStyles: styles.largeVideo,
			containerstyles: [styles.container, styles.column]
		});
	};
	minimizeVideo = () => {
		this.setState({
			videoStyles: styles.smallVideo,
			containerstyles: styles.container
		});
	};
	render() {
		return (
			<div style={this.state.containerstyles} className="container">
				<div>
					<ReactPlayer
						style={this.state.videoStyles}
						height={this.state.videoStyles.height}
						width={this.state.videoStyles.width}
						url="https://www.youtube.com/watch?v=Y2efVMJD2TU"
						// controls={true}
						onPlay={() => this.expandVideo()}
						onPause={() => this.minimizeVideo()}
					/>
				</div>
				<Link to="/article" style={{ textDecoration: 'none', color: 'black', maxWidth: '600px' }}>
					<div style={styles.typeTitle}>News Release</div>
					<div style={styles.title}>University of Utah Names Historic Building After President Monson</div>
					<div>
						A historic mansion in downtown Salt Lake City has been renamed the Thomas S. Monson center after the current President of the Church of Jesus Christ of Latter-Day Saints
					</div>
				</Link>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		padding: '40px',
		width: '100%',
		height: '100%'
	},
	column: {
		flexDirection: 'col'
	},
	smallVideo: {
		width: '150px',
		height: '110px',
		margin: '0 20px 0 0'
	},
	largeVideo: {
		width: '100%',
		minHeight: '400px',
		maxHeight: '800px',
		aspectRatio: 1,
		margin: '5px 0 25px 0'
	},
	typeTitle: {
		color: 'blue'
	},
	title: {
		fontSize: '32px',
		margin: '5px 0'
	},
	description: {
		padding: '1px'
	}
};

export default Title;
