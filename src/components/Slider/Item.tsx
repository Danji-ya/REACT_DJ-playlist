import { ISearchKeyword, ITopSearched } from '../../@types/search';
import Styled from './Slider.style';

interface Props {
  item: ITopSearched;
  handleSearchKeyword: ({ value, isAutoKeyword }: ISearchKeyword) => void;
}

function Item({ item, handleSearchKeyword }: Props) {
  return (
    <Styled.AlbumWrapper key={`${item.id}`}>
      <Styled.AlbumDiv
        onClick={() =>
          handleSearchKeyword({ value: item.title, isAutoKeyword: true })
        }
        aria-label="music play button"
      >
        <Styled.AlbumImgWrapper>
          <Styled.AlbumImg src={item.src} alt="Album Image" />
        </Styled.AlbumImgWrapper>
        <Styled.AlbumTitle>{item.title}</Styled.AlbumTitle>
      </Styled.AlbumDiv>
    </Styled.AlbumWrapper>
  );
}

export default Item;
