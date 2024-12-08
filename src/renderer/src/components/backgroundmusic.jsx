import { useEffect } from 'react';
import { Howl } from 'howler';

const BackgroundMusic = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ['../assets/audios/backgroundmusic.mp3'],
      loop: true,
      volume: 1,
      onplay: () => {alert("Music played")}
    });

    sound.play();

    return () => sound.stop();
  }, []);

  return null;
};

export default BackgroundMusic;