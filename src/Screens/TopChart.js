import React, { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import ListItem from '../Container/ListItem';
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

const Credit = styled.Text`
  color: #9E9E9E;
`;

const StyledFlatList = styled(FlatList)`
`;

function App() {
  // const API_KEY = '428843157b7408d7d619f007a24c0dbc';
  const APILink =  `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&country=spain&api_key=${API_KEY}&format=json`;
  const {store, dispatch} = useContext(ChartContext);
  const [query] = useState('react');
  let ignore = false;

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(APILink);
        const responseJson = await response.json();
        
        if (!ignore) {
          dispatch({
            type: 'SET_SONGS_DATA',
            songs: responseJson.tracks,
          });
          ignore = true;
        }
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  function handleFavSong(data) {
    dispatch({
      type: 'ADD_FAV_SONG',
      data,
    });
  }

  return (
    <Container>
      <Title>Top 50 Songs</Title>
      <Credit>via last.fm</Credit>
      { ignore ? 
        (<Credit>Loading data..</Credit>) 
        : (
          <StyledFlatList
            data={store.track}
            keyExtractor={item => item.name}
            renderItem={({item, index}) => 
              <ListItem 
                dataSource={item}
                index={index+1}
                addFav={data => handleFavSong(data)}
              />
            }
          />
        )
      }
    </Container>
  ); 
}

export default App;