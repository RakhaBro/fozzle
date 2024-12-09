import { useEffect } from 'react';
import { Howl } from 'howler';

const BackgroundMusic = () => {
  
  const sound = new Howl({
    src: ['../assets/audios/backgroundmusic.mp3'],
    loop: true,
    volume: 1,
    onplay: () => {alert("Music played")},
    onplayerror: (e) => {alert(e)}
  });

  useEffect(() => {
    return () => sound.stop();
  }, []);

  return <button onClick={() => sound.play()}></button>;
};

export default BackgroundMusic;