package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        return ok(index.render());
    }
    
    public Result menu() {
        return ok(menu.render());
    }
    
    public Result projetEtude() {
        return ok(projetEtude.render());
    }
    
    public Result cv() {
        return ok(cv.render());
    }
    
    public Result dessinTravauxManuels() {
        return ok(dessinTravauxManuels.render());
    }
    
    public Result footer() {
        return ok(footer.render());
    }

}
