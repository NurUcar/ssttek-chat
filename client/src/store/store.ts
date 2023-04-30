import dashboardAPI from '@/store/reducers/api/dasboard';
import dashboardUI from '@/store/reducers/ui/dashboard';
import { combineReducers, configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const listenerMiddleware = createListenerMiddleware();
const uiReducers = combineReducers({
	dashboard: dashboardUI,
});

const apiReducers = combineReducers({
	dashboard: dashboardAPI,
});

export const store = configureStore({
	reducer: {
		ui: uiReducers,
		api: apiReducers,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).prepend(listenerMiddleware.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
