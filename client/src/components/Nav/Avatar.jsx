const Avatar = ({ src }) => {
	return (
		<div className="avatar-image-container" >
			<img
				src={src || "https://i.postimg.cc/mDbLHNhB/placeholder.jpg"}
				alt="Avatar"
        className="avatar-image"
			/>
		</div>
	);
};

export default Avatar;
