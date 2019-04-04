import React from 'react';


const VideoListItem = (props) => {
    const onUserSelected= props.onUserSelected;
    const video = props.video;
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onUserSelected(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt= "" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title} </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;