import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

// STYLE IMPORTS
import '../index.css';

// COMPONENT IMPORTS
import ArticleImageSelect from './ArticleImageSelect';
import SmallVideo from './SmallVideo';

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayImage: require('../assets/photo01.jpg'),
			displayImageAlt: 'A mountain area',
			imageCaption: 'We should all look at this picture',
			imageTitle: 'A Pretty Picture'
		};
	}

	changeImage = (img, alt, title, caption) => {
		this.setState({
			displayImage: img,
			displayImageAlt: alt,
			imageCaption: caption,
			imageTitle: title
		});
	};
	render() {
		return (
			<div id="article" style={styles.container}>
				<Link style={styles.link} to="/">News Releases</Link>
				<div style={styles.title}>University of Utah Names Historic Building After President Monson</div>
				<ArticleImageSelect
					displayImage={this.state.displayImage}
					displayImageAlt={this.state.displayImageAlt}
					imageCaption={this.state.imageCaption}
					imageTitle={this.state.imageTitle}
					changeImage={this.changeImage}
				/>
				<div style={styles.text} className="article-text">
					After the Savior’s death and Resurrection, He instructed His disciples for 40 days and then ascended into heaven. Left with a vacancy in the Quorum of the Twelve Apostles—created by the betrayal and death of Judas Iscariot—members of the quorum gathered and petitioned the Lord.
				</div>
				<div style={styles.text} className="article-text">
					The Church is not a business and is not run like one; Church leaders do not climb a corporate ladder or seek position or recognition. Their callings require extensive travel, but sightseeing opportunities are scarce. And they are not immune from challenges. Those are just some misconceptions, say members of the Quorum of the Twelve Apostles.
				</div>
				<div style={styles.subtitle}>"Shepherds and witnesses"</div>
				<div style={styles.text} className="article-text">
					“There is a misconception that we come out of a professional and business life and we are basically corporate-style leaders,” he said. “In reality, we are shepherds and witnesses. We draw upon our past experiences and any skills and talents we developed, but that's not the focus. The focus is on what the Lord wants and how He wants us to do that.”
				</div>
				<div className="row-on-desktop">
					<div>
						<div style={styles.text} className="article-text">
							“The Lord puts a lot of people together who are not that alike in many things—their professions, how they grew up, where they come from,” said Elder Andersen. “They are alike in their testimony of the Savior and in their humility. They don’t seek position; they are not trying to be the smartest person in the room. The Lord can work with that. I have never seen anyone show anger, and I have never seen anyone put anyone down.”
						</div>
						<div style={styles.text} className="article-text">
							One great blessing of the apostleship is the responsibility to travel the globe and bear witness of Jesus Christ, he said. But travel does not take leaders to the exotic locations of the globe. Often it takes them to humble villages and into the homes of sweet, faithful members of the Church. It requires long hours on airplanes and many nights in hotels. “We go where the members are,” Elder Cook said.
						</div>
					</div>
					<SmallVideo
						url={'https://www.youtube.com/watch?v=Y2efVMJD2TU'}
						title={'What a video!'}
						caption={'A very descriptive caption'}
					/>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%'
	},
	link: {
		textDecoration: 'none',
		color: '#3F79A1',
		fontSize: '18px'
	},
	row: {
		display: 'flex',
		flexDirection: 'row'
	},
	title: {
		fontSize: '32px',
		margin: '15px 0 25px 0'
	},
	subtitle: {
		margin: '20px 0',
		fontSize: '24px',
		fontWeight: 'bold'
	},
	text: {
		margin: '20px 0'
	}
};

export default Article;
