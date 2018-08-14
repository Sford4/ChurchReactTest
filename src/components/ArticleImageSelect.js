import React from 'react';

function ArticleImageSelect(props) {
	return (
		<div style={{margin: '0 0 40px 0'}}>
			<img style={styles.bigImage} src={props.displayImage} alt={props.displayImageAlt} />
			<div className="row-beneath-image" style={styles.row}>
				<div>
					<div style={styles.imgTitle}>{props.imageTitle}</div>
					<div style={styles.imgCaption}>{props.imageCaption}</div>
				</div>
				<div>
					<img
						style={styles.thumbnail}
						src={require('../assets/photo01.jpg')}
						alt="A mountain area"
						onClick={() =>
							props.changeImage(
								require('../assets/photo01.jpg'),
								'A mountain area',
								'A Pretty Picture',
								'We should all look at this picture'
							)}
					/>
					<img
						style={styles.thumbnail}
						src={require('../assets/photo02.jpg')}
						alt="A second pretty outdoor scene"
						onClick={() =>
							props.changeImage(
								require('../assets/photo02.jpg'),
								'A second pretty outdoor scene',
								'A Second Pretty Picture',
								'We should all look at this other pretty picture'
							)}
					/>
				</div>
			</div>
		</div>
	);
}

const styles = {
    row: {
		position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
    imgTitle: {
		fontWeight: 'bold',
		margin: '2px 0'
	},
	imgCaption: {},
	bigImage: {
		width: '100%',
		maxWidth: '1200px',
		height: '100%',
		maxHeight: '666px',
		minHeight: '200px'
    },
    
	thumbnail: {
		width: '40px',
		height: '30px',
		margin: '5px',
		cursor: 'pointer'
	}
}

export default ArticleImageSelect;
