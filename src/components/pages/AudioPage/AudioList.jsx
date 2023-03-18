import Audio from "./Audio.jsx";

const AudioList = ({ audioList, searchTerm }) => {
  return (
    <div>
      {audioList.map((audio) => {
        return (
          <Audio
            key={audio.id}
            audioName={audio.audio_name}
            audioLink={audio.audio_link}
          />
        );
      })}
    </div>
  );
};

export default AudioList;
