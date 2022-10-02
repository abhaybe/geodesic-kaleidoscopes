// radius, color, position
// color should be a hex value 
// position is separate x and y value 

class Mass {
    constructor(type, x, y) {
        
        this.x = x;
        this.y = y;
        // black_hole, blue_giant, main_sequence, white_dwarf, planet
        this.mass = types[type][0];
        this.color = types[type][1];
        this.radius_visible = types[type][2];
        this.radius= 2*mass_scale*types[type][0]/c^2;
        this.scale = types[type][4];
        this.border_color = types[type][3];
        if(type=='planet'){
            this.color='#'+Math.floor(Math.random()*16777215).toString(16);
            this.border_color=this.color;
        }
    }
}