import Styled from './Player.style';
import { formatTime } from '../../utils/common';

interface Props {
  currentTime: number;
  duration: number;
  handleProgress: (target: HTMLInputElement) => void;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
}

function Progress({
  currentTime,
  duration,
  handleProgress,
  handleMouseDown,
  handleMouseUp,
}: Props) {
  return (
    <Styled.ProgressContainer>
      <Styled.ProgressBar
        type="range"
        value={currentTime}
        min="0"
        max={duration || 0}
        onChange={(e) => handleProgress(e.target)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Styled.ProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Styled.ProgressTime>
    </Styled.ProgressContainer>
  );
}

export default Progress;
