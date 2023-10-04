import { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { IPost } from "../../types/posts";

interface PostProps {
  title: string,
  body: string
}


const Post: FC<PostProps> = ({title, body}) => {

  return (
    <View>
    <Text>{title} </Text>
    <Text>{body} </Text>
    </View>
  )
}


export default Post;