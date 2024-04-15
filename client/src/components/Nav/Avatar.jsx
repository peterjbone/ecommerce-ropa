const Avatar = ({ src }) => {
	return (
		<div>
			<img
				src={src || "https://i.postimg.cc/mDbLHNhB/placeholder.jpg"}
				alt="Avatar"
				width="35"
				height="35"
				style={{ borderRadius: "50%", border: "3px solid #888" }}
			/>
		</div>
	);
};

export default Avatar;
