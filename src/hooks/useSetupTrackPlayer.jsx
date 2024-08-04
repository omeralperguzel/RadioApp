import { useEffect, useRef } from 'react';
import TrackPlayer, { Capability, RatingType, RepeatMode } from 'react-native-track-player';

const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 10,
    });
    console.log('Track player setup done');
    await TrackPlayer.updateOptions({
        ratingType: RatingType.Heart,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
        ],
    });
    await TrackPlayer.setVolume(0.5)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
  }

export const useSetupPlayer = ({onLoad}) => {
    const isInitialized = useRef(false);
    // Logic for setting up the player
    useEffect(() => {
        setupPlayer().then(() => {
            isInitialized.current = true;
            console.log('useSetupPlayer: Player setup done');
            onLoad();
    })
    .catch((error) => {
        isInitialized.current = false;
        console.log('useSetupPlayer: Player setup error', error);
    });
    }, []);
}