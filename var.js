  var timer = 3
  var gamestate = 'menu'
  var gamenum = 1
  var Tr = 0
  var diaTr = 0
  var letters = []
  var done = false
  var ie2 = 0
  var limit = 0
  var colors = []
  var timer2 = 0.5
  var abc = 0
  var heat = 2
  var dia = 1
  var dia2 = false
  var start = true
  var rec, col, laz, mirB, mir, wal, gal, dGal, div, mer, chek
  var on = []
  var moving = false
  var oMoving = false
  var PX = 0
  var PY = 0
  var oMov = null
  var pd = 0 //1 : up   2 : right   3 : down   4 : left
  var nes = []
  var lSpeed = 6
  var mirC = []
  var timer5 = 0.3
  var juice = []
  
  var grid = [[  [], [], [], [], [], [], [], [], [], []  ], 
              [  [], [], [], [], [], [], [], [], [], []  ], 
              [  [], [], [], [], [], [], [], [], [], []  ], 
              [  [], [], [], [], [], [], [], [], [], []  ],
              [  [], [], [], [], [], [], [], [], [], []  ],
              [  [], [], [], [], [], [], [], [], [], []  ], 
              [  [], [], [], [], [], [], [], [], [], []  ], 
              [  [], [], [], [], [], [], [], [], [], []  ], 
              [  [], [], [], [], [], [], [], [], [], []  ],
              [  [], [], [], [], [], [], [], [], [], []  ]]
  
var lazers = []
var lazerCol = []
  
  //states: menu, fade, showS1, hideS1, showS2, hideS2 ... showS5, hideS5, => end