// Constant

var G = 6.67 * Math.pow(10, -11);
var c = 1;
// var M = 1.989 * Math.pow(10, 30);
var M = 1
var AU = 1.496 * Math.pow(10, 11);
var RS = 6.96 * Math.pow(10, 8);
var scale = 1;
var mass_scale= 0.6;

var state = 1;
var types = {
    "black_hole": [30*M, '#000000', 10, '#000000', 0.5],
    "blue_giant": [5*M, '#11E5D5', 8, '#FFFFFF', 0.25],
    "main_sequence": [M, '#FAC14F', 5, '#FFFFFF', 0.05],
    "white_dwarf": [1.4 * M, '#BBF7EE', 5, '#FFFFFF', 0.01],
    "planet": [1 * Math.pow(10, -6) * M, '#'+Math.floor(Math.random()*16777215).toString(16), 3, '#FFFFFF', 0.0005],
}

var counter = 2;
var reflect = 1;

var win=0;

var hit_width = 40;
