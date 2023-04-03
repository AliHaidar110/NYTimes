import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FastImage from "react-native-fast-image";
import { asyncTimeout } from "../../lib";

import { CONSTANTS } from "../../resources";
import { articlesServices } from "../../services";

// #region Initial State
const initialState = {
	error: null,
	mostViewed: [],
	status: CONSTANTS.SLICE.STATUS.IDLE,
};
// #endregion

// #region Thunk Actions
export const fetchMostViewdArticles = createAsyncThunk(
	"articles/fetchMostViewdArticles",
	async () => {
    const [res] = await Promise.all([
      articlesServices.getMostViewedArticles(),
      asyncTimeout(450),
    ]);

    if (!res?.results) return [];

    const data = res.results.map(
      ({title, media, published_date, id, byline, geo_facet, abstract}) => {
        const thumbnailUri =
          media[0]?.['media-metadata']?.find(({format}) => {
            return format === 'Standard Thumbnail';
          })?.url || media[0]?.['media-metadata']?.[0].url;

        media[0]?.['media-metadata']?.[1]?.url &&
          FastImage.preload([{uri: media[0]['media-metadata'][1].url}]);

        return {
          id,
          title,
          location: geo_facet[0],
          author: byline,
          date: published_date,
          thumbnailUri,
          imgUri: media[0]?.['media-metadata'][1].url,
          imgSharedId: `ny-img-${id}`,
          authorSharedId: `ny-author-${id}`,
          dateSharedId: `ny-date-${id}`,
          paragraph: abstract,
        };
      },
    );

		return data;
	}
);

// #endregion

export const articlesSlice = createSlice({
	name: "articles",
	initialState,
	reducers: {
		clearArticles: () => {
			return initialState;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchMostViewdArticles.pending, (state) => {
				state.error = null;
				state.status = CONSTANTS.SLICE.STATUS.LOADING;
			})
			.addCase(
				fetchMostViewdArticles.fulfilled,
				(state, { payload: articles = [] }) => {
          state.mostViewed = articles;
					state.error = null;
					state.status = CONSTANTS.SLICE.STATUS.SUCCESS;
				}
			)
			.addCase(fetchMostViewdArticles.rejected, (state, action) => {
				state.status = CONSTANTS.SLICE.STATUS.FAILED;
				state.error = action.error.message;
			})
	},
});

// #region actions
export const { clearArticles } = articlesSlice.actions;
// #endregion

// #region selectors
export const selectArticlesStatus = (state) => state.articles.status;
export const selectArticlesError = (state) => state.articles.error;
export const selectArticles = (state) => state.articles.mostViewed;
// #endregion

export default articlesSlice.reducer;
