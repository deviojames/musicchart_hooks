import React, { useState, useContext }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChartContext from '../chart.context';
import picture from '../images/play-button.png';
import Card from '../Components/Cards'

const Title = styled.Text`
  font-size: 16;
  margin-top: 5px;
`;

const ArtisLable = styled.Text`
  font-size: 11;
  color: #ff2d55;
`;

const Image = styled.Image`
  /* flex: 1; */
  width: 50px;
  height: 50px;
  tint-color: #ff2d55;
`

const Content = styled.View`
  flex: 3;
  padding-left: 5;
`;

const RankArea = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`

const IconArea = styled.View`
  flex: 1;
  justify-content: center;
`

const FavIcon = styled(Icon).attrs({
  size: 30,
})`
  align-self: center;
`;

function ListItem({ dataSource, index, addFav }) {
  const {store, dispatch} = useContext(ChartContext);
  const [liked, setLike] = useState(false);

  function handleAdd(song) {
    likedHandler();
    addFav(song);
  }

  function checkLiked() {
    const filter = store.favSongs.filter((song) => song.name === dataSource.name);
    if(filter.length < 1) {
      return false;
    }
    return true;
  }

  function likedHandler() {
    liked ? setLike(false)
    : setLike(true);
  };

  return (
    
    <Card>
      <Image
        source={picture}
      />
      <RankArea>
        <Title numberOfLines={1}>{index}</Title>
      </RankArea>
      <Content>
        <Title numberOfLines={1}>{dataSource.name}</Title>
        <ArtisLable>{dataSource.artist.name}</ArtisLable>
      </Content>
      <IconArea>
        <FavIcon
          color="#ff2d55"
          name={dataSource.liked ? "ios-heart" : "ios-heart-empty"}
          onPress={() => handleAdd(dataSource)}
          testID={`favBtn_${index}`}
        />
      </IconArea>
    </Card>
  )
}

ListItem.PropTypes = {
  dataSource: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    artist: PropTypes.object.isRequired,
  }),
  addFav: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default ListItem;