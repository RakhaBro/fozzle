import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import FozzleBgMusic from '../assets/audios/backgroundmusic.mp3';
import Icon_SoundOn from '../assets/icons/soundIcon';

const BackgroundMusic = () => {
  
  const sound = new Howl({
    src: [FozzleBgMusic],
    loop: true,
    volume: 1,
  });

  useEffect(() => {
    sound.play();
    return () => sound.stop();
  }, []);

  const [mute, setMute] = useState(false);
  useEffect(() => {
    sound.mute(mute);
  }, [mute]);


  return <button onClick={() => {setMute((prevValue) => !prevValue)}}>
    <Icon_SoundOn dimension={24} />
  </button>;
  // return null;
};

export default BackgroundMusic;