import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import * as PostActions from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface State extends EntityState<Comment> {}

export const initialState: State = {
  ids: [],
  entities: {},
};

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const reducer = createReducer(
  initialState,

  on(PostActions.loadPosts, (state) => state),
  on(PostActions.loadPostsSuccess, (state, action) => state),
  on(PostActions.loadPostsFailure, (state, action) => state)
);
