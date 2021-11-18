import { NgModule } from "@angular/core";
import { FavoritasComponent } from "./favoritas.component";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
    {
        path: '',
        component: FavoritasComponent
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class FavoritasRoutingModule {}