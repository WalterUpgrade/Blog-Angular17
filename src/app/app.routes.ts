import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
export const routes: Routes = [
  { path: '', component: PostListComponent }, //  Pagina principal
  { path: ':postId', component: DetailPostComponent }, // Se colocan dos puntos si queremos que vaya directamente. En vez de "movies/:movieName"
  { path: 'post/create', component: CreatePostComponent },
];
