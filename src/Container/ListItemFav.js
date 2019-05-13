import React, { useState }  from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import picture from '../images/play-button.png';

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

const Card = styled.View`
  background-color: white;
  padding: 0px 0px 0px;
  margin: 10px 5px 5px 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.3);
  flex-direction: row;
  height: 50;
`;

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

function ListItemFav({ dataSource, index, addFav }) {
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

export default ListItemFav;