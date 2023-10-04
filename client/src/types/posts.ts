export interface IPost {
  userId?: number,
  id: number | string,
  title: string,
  body: string,
}

export interface IPostObject {
  post?: IPost,
}


export interface IPostState {
  posts: IPost[],
  loading: boolean,
  error: null | string;
}

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: any[]
}
interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsAction = 
FetchPostsAction 
| FetchPostsSuccessAction 
| FetchPostsErrorAction