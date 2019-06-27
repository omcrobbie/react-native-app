import { types, Instance, SnapshotIn } from 'mobx-state-tree';

export const Category = types.model('Category', {
        label: types.string,
        color: types.string,
        id: types.identifier
    })
export interface ICategory extends Instance<typeof Category> {}
export interface ICategoryIn extends SnapshotIn<typeof Category> {}
