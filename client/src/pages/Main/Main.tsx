import React, {useEffect} from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import {styles} from './styles'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { IPost, IPostObject, IPostState, PostsActionTypes } from '../../types/posts';
import axios from 'axios';
import Post from '../../components/Post/Post';

const Main: React.FC = ()  => {
  const {posts, error, loading} = useTypedSelector(state => state.posts)
  const dispatch = useDispatch()

  const fetchPosts = async () => {
          try {
              dispatch({type: PostsActionTypes.FETCH_POSTS})
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
              setTimeout(() => {
                  dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
              }, 500)
          } catch (e) {
              dispatch({
                  type: PostsActionTypes.FETCH_POSTS_ERROR,
                  payload: 'Произошла ошибка при загрузке пользователей'
              })
          }
    }


  useEffect(() => {
    fetchPosts()
}, [])

if (loading) {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size="medium" animating={true} />
    </View>
  )
}
if (error) {
  return <Text>{error}</Text>
}

const renderItem: ListRenderItem<IPost> = ({ item }/* : {post: IPost} */) => (
  <Post title={item?.title} body={item?.body} />
);


return (
  <View style={styles.container}>
      <FlatList 
      /* style={styles.table} */
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item: IPost) => item?.id?.toString()}
      />
  </View>
);

}

export default Main;