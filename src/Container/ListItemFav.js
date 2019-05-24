import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
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
  tint-color: #ff2d55;
  width: 50px;
  height: 50px;
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

function ListItemFav({ dataSource, addFav }) {
  const [liked, setLike] = useState(true);

  function handleAdd(song) {
    likedHandler();
    addFav(song);
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
      <Content>
        <Title numberOfLines={1}>{dataSource.name}</Title>
        <ArtisLable>{dataSource.artist.name}</ArtisLable>
      </Content>
      <IconArea>
        <FavIcon
          color="#ff2d55"
          name={liked ? "ios-heart" : "ios-heart-empty"}
          onPress={() => handleAdd(dataSource)}
        />
      </IconArea>
    </Card>
  )
}

ListItemFav.PropTypes = {
  dataSource: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    artist: PropTypes.object.isRequired,
  }),
  addFav: PropTypes.func.isRequired,
}

export default ListItemFav;