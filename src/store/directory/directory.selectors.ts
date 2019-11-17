import { createSelector } from 'reselect';
import { AppState } from '../root.reducer';
import { DirectoryState } from '../directory/directory.types';

const selectDirectoryState = (state: AppState) => state.directory;

export const getDirectorySections = createSelector(
    [selectDirectoryState],
    (state: DirectoryState) => state.sections);