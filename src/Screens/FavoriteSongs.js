import React, { useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import ListItemFav from '../Container/ListItemFav';
import ChartContext from '../chart.context';

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
`;

const Title = styled.Text`
  font-size: 32;
  font-weight: bold;
  margin-top: 5px;
`;

const NoResult = styled.Text`
  color: #9E9E9E;
  align-self: center;
`;

const Credit = styled.Text`
  color: #9E9E9E;
`;

const StyledFlatList = styled(FlatList)`
`;

function FavoriteSong() {
  const {store, dispatch} = useContext(ChartContext);

  useEffect(() => {
    console.log('items++ ',store);
  });

  function addRemoveFav(data) {
    dispatch({
      type: 'ADD_FAV_SONG',
      data,
    });
  }

  return (
    <Container>
      <Title>Favorite</Title>
      <Credit>via last.fm</Credit>
      { store.favSongs.length > 0 ? (
          <StyledFlatList
            data={store.favSongs}
            renderItem={({item, index}) => 
              <ListItemFav 
                dataSource={item}
                index={index+1}
                addFav={song => addRemoveFav(song)}
              />
            }
          />
        )
      : (<NoResult>No Result</NoResult>)
      }
    </Container>
  ); 
}

export default FavoriteSong;