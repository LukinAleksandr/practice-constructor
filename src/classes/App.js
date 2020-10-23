import {Sidebar} from './Sidebar'
import {Site} from './Site'

export class App{
    constructor(model){
        this.model = model
    }

    init(){

        const site = new Site('#site');

        site.render(this.model);

        const sidebar = new Sidebar('#panel', newBlock => {
            this.model.push(newBlock)
            site.render(this.model);
        })
    }
}