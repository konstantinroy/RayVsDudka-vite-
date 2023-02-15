const Audio = ({ audioName, audioLink }) => {

    return (
        <div className="audioBlock">
            <h2 className="audioName">{audioName}</h2>
            <audio src={audioLink} controls="controls"></audio>
        </div>
    );
}

export default Audio;