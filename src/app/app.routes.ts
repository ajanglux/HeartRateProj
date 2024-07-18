import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'folder1/:id',
    loadComponent: () => import('./folder1/folder1.page').then( m => m.Folder1Page)
  },
  {
    path: 'folder2',
    loadComponent: () => import('./folder2/folder2.page').then( m => m.Folder2Page)
  },
];
