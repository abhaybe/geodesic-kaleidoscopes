class Light {
    constructor(angle, x, y) {
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.color = '#F2FF26'
    }
}

Light.prototype.past = function (){
    xp = this.x - c*Math.cos(this.angle);
    yp = this.y - c*Math.sin(this.angle);
    return [xp, yp];
};
Light.prototype.dist = function (x, y, mass) {
    return Math.sqrt((x - mass.x) ** 2 + (y - mass.y) ** 2);
}

// calculating impact parameter (distance of closest approach)
Light.prototype.b = function (mass, xp, yp) {
    
    // a= 
    return Math.abs(mass.y + (mass.x * (yp - this.y)) / (this.x - xp) - yp - (xp * (yp - this.y)) / (this.x - xp)) / Math.sqrt(1 + ((yp - this.y) / (this.x - xp)) ** 2);
    // return a*Math.sqrt(a/(a-mass.radius))
}

// returns the change in angle in the light due to the masses that are currently on the screen
Light.prototype.dphi = function (list_masses) {
    
    // list_masses is the current list of masses that are on the game screen
    xp = this.past()[0]
    yp = this.past()[1]

    dphi = 0
    for (var i = 0; i < list_masses.length; i++) {
        object = list_masses[i]
        r = this.dist(this.x, this.y, object);
        b = this.b(object, xp, yp);
        dr = Math.abs(r - this.dist(xp, yp, object));

        // calculating dphi / dr according to the theory of light bending 
        // in scharzchild geometries (general relativity)
        dpdr = 1 / (r * r * Math.sqrt(1 / (b * b) - (1 - object.radius / r) * 1 / (r * r)));

        // check whether to invert dphi using cross product. 
        // when the object is travelling clockwise WRT object, dphi is negative
        r_vec = [this.x - object.x, this.y - object.y, 0]
        v_vec = [this.x - xp, this.y - yp, 0]
        if (r_vec[0]*v_vec[1] - r_vec[1]*v_vec[0] < 0){
            dpdr *= -1
         }
        dphi += dpdr * dr * object.scale;
    }
    return dphi;
};

Light.prototype.checkCollision= function(list_masses){

//     for(var i =0; i <list_masses.length; i++){

//          object=list_masses[i]

//          if (this.dist(this.x, this.y, object)<object.radius_visible){
//             return 0;
//         }

    





// }

// return 1;

return 1;

}

Light.prototype.checkBounds = function (bound_x, bound_y) {
//     if (this.x <= 0) {
//             this.x = 0;
//             return 0;
//     }
//     if (this.x >= bound_x) {
//         this.x = bound_x;
//         return 0;
//     }
//     if (this.y <= 0) {
//         this.y = 0;
//         return 0;
// }
//     if (this.y >= bound_y) {
//         this.y = bound_y;
//         return 0;
//     }
    // if (this.x < 0) {
    //     this.x *= -1;
    // }
    // if (this.x > bound_x) {
    //     this.x = 1000-this.x;
    // }
    // if (this.y < 0) {
    //     this.y *= -1;
    // }
    // if (this.y > bound_y) {
    //     this.y = 500-this.y;
    // }
    return 1;
}

// Light.prototype.wonGame = function (side, start, end) {
//     /**
//      * side 0 -> x = 0
//      *      1 -> x = canvas end
//      *      2 -> y = 0
//      *      3 -> y = canvas end
//      */
//      if ((start < this.y) && (this.y < end) && (this.x == 0)) return 1;
//     /**
//     switch (side) {
//         case 0:
//             if ((start < this.y) && (this.y < end) && (this.x == 0)) return 1;
//             break;
//         case 1:
//             if ((start < this.y) && (this.y < end) && (this.x != 0)) return 1;
//             break;
//         case 2:
//             if ((start < this.x) && (this.x < end) && (this.y == 0)) return 1;
//             break;
//         case 3:
//             if ((start < this.x) && (this.x < end) && (this.y != 0)) return 1;
//             break;
//     }
//      */
//     return 0;
// }

Light.prototype.warp = function (boundX, boundY) {
    if (this.x > boundX) this.x = 0;
    if (this.x < 0) this.x = boundX;
    if (this.y > boundY) this.y = 0;
    if (this.y < 0) this.y = boundY;
}