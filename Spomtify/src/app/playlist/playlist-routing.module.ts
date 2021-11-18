import { NgModule } from "@angular/core";
import { PlaylistComponent } from "./playlist.component";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
    {
        path: '',
        component: PlaylistComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class PlaylistRoutingModule {}