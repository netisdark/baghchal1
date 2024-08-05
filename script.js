
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        // Horizontal Line
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(300, 10);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, 150);
        ctx.lineTo(300, 150);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, 80);
        ctx.lineTo(300, 80);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, 220);
        ctx.lineTo(300, 220);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, 290);
        ctx.lineTo(300, 290);
        ctx.stroke();
        
        // Vertical Line
        ctx.beginPath();
        ctx.moveTo(150, 0);
        ctx.lineTo(150, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(10, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(80, 0);
        ctx.lineTo(80, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(220, 0);
        ctx.lineTo(220, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(290, 0);
        ctx.lineTo(290, 300);
        ctx.stroke();
        
        // Diagonal Line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(140, 0);
        ctx.lineTo(300, 160);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, 140);
        ctx.lineTo(160, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(300, 0);
        ctx.lineTo(0, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(300, 140);
        ctx.lineTo(140, 300);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(160, 0);
        ctx.lineTo(0, 160);
        ctx.stroke();
    const board=[
        ['1','0','0','0','1'],
        ['0','0','0','0','0'],
        ['0','0','0','0','0'],
        ['0','0','0','0','0'],
        ['1','0','0','0','1']
    ];
    const data = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['P', 'Q', 'R', 'S', 'T'],
  ['U', 'V', 'W', 'X', 'Y']
];
const graph2 = {
    A: [
        { B: ['C'] },
        { F: ['K'] },
        { G: ['M'] }
    ],
    B: [
        { C: ['D'] },
        { G: ['L'] }
    ],
    C: [
        { B: ['A'] },
        { D: ['E'] },
        { G: ['K'] },
        { H: ['M'] },
        { I: ['O'] }
    ],
    D: [
        { C: ['B'] },
        { I: ['N'] }
    ],
    E: [
        { D: ['C'] },
        { I: ['M'] },
        { J: ['O'] }
    ],
    F: [
        { G: ['H'] },
        { K: ['P'] }
    ],
    G: [
        { H: ['I'] },
        { M: ['S'] },
        { L: ['Q'] }
    ],
    I: [
        { H: ['G'] },
        { M: ['R'] },
        { I: ['J'] }
    ],
    H: [
        { G: ['F'] },
        { M: ['R'] },
        { I: ['J'] }
    ],
    J: [
        { O: ['T'] },
        { I: ['H'] }
    ],
    K: [
        { G: ['C'] },
        { F: ['A'] },
        { P: ['V'] },
        { L: ['M'] },
        { Q: ['W'] }
    ],
    L: [
        { G: ['B'] },
        { Q: ['V'] },
        { M: ['N'] }
    ],
    M: [
        { L: ['K'] },
        { G: ['A'] },
        { Q: ['U'] },
        { R: ['W'] },
        { S: ['Y'] },
        { I: ['E'] },
        { N: ['O'] },
        { H: ['C'] }
    ],
    N: [
        { I: ['D'] },
        { M: ['L'] },
        { S: ['X'] }
    ],
    O: [
        { I: ['C'] },
        { N: ['M'] },
        { S: ['W'] },
        { T: ['Y'] },
        { J: ['E'] }
    ],
    P: [
        { K: ['F'] },
        { Q: ['R'] }
    ],
    Q: [
        { L: ['G'] },
        { M: ['I'] },
        { R: ['S'] }
    ],
    R: [
        { M: ['H'] },
        { S: ['T'] },
        { Q: ['P'] }
    ],
    S: [
        { R: ['Q'] },
        { M: ['G'] },
        { N: ['I'] }
    ],
    T: [
        { O: ['J'] },
        { S: ['R'] }
    ],
    U: [
        { P: ['K'] },
        { Q: ['M'] },
        { V: ['W'] }
    ],
    V: [
        { W: ['X'] },
        { Q: ['L'] }
    ]
};

function findCommon(graph2,node1,node2){
    for(nodeCounter=0;nodeCounter<graph2[node1].length;nodeCounter++){
        if((Object.keys(graph2[node1][nodeCounter])[0])===node2){
            return graph2[node1][nodeCounter][node2][0];
        }
    }
}

const graph = {
  A: ['B', 'G', 'F'],
  B: ['A', 'G', 'C'],
  C: ['C', 'B', 'H', 'D', 'I'],
  D: ['C', 'I', 'E'],
  E: ['D', 'I', 'J'],
  F: ['A', 'G', 'K'],
  G: ['A', 'B', 'C', 'F', 'H', 'K', 'L', 'M'],
  H: ['C', 'G', 'I', 'M'],
  I: ['C', 'D', 'E', 'H', 'J', 'M', 'N', 'O'],
  J: ['E', 'I', 'O'],
  K: ['F', 'G', 'L', 'P', 'Q'],
  L: ['K', 'G', 'M', 'Q'],
  M: ['G', 'H', 'I', 'L', 'N', 'Q', 'R', 'S'],
  N: ['M', 'I', 'O', 'S'],
  O: ['I', 'J', 'N', 'S', 'T'],
  P: ['K', 'L', 'Q', 'U', 'V'],
  Q: ['K', 'L', 'M', 'P', 'R', 'U', 'V', 'W'],
  R: ['M', 'Q', 'S', 'W'],
  S: ['M', 'N', 'O', 'R', 'T', 'W', 'X', 'Y'],
  T: ['O', 'S', 'Y'],
  U: ['P', 'Q', 'V'],
  V: ['U', 'Q', 'W'],
  W: ['Q', 'R', 'S', 'V', 'X'],
  X: ['W', 'S', 'Y'],
  Y: ['S', 'T', 'X']
};
const getElementByDataAttribute = (attributeValue) => {
    return document.querySelector(`.box[data="${attributeValue}"]`);
  };
  
    var flag=1,clicked,selected,goat=1,isclicked=0,k,l,row,column,row_,col,n,p,col_,row__,index;
    var arr=Array(8)
    var div=Array(5);
    for (let i = 0; i < 5; i++) {
    div[i] = Array(5);
    for (let j = 0; j < 5; j++) {
        div[i][j] = document.createElement('div');
        div[i][j].setAttribute('data',data[i][j]);
        div[i][j].setAttribute('id',i+''+j);
        div[i][j].setAttribute('row',i);
        div[i][j].setAttribute('column',j);
        div[i][j].setAttribute('class', 'box');
        div[i][j].setAttribute('content', parseInt(board[i][j]));
        
        if (parseInt(board[i][j]) === 1) {
            div[i][j].innerHTML = "&#128047";
        }
        if (parseInt(board[i][j]) === 2) {
            div[i][j].innerHTML = "&#128016";
        }
        div[i][j].addEventListener('click', (function(x, y) {
        
            return function(e) {
            if(flag===1){
                
            clicked = e.target;
            if((clicked.getAttribute('content'))=='1'){
                   
            } 
            else{
                
             if(goat<=20){
                 if(clicked.getAttribute('content')=='0'){ 
                    document.getElementById('p').innerHTML='Tiger Player turn';
                    clicked.setAttribute('content', '2');
                    board[x][y]='2';
                    console.log(board);
                    clicked.innerHTML = '&#128016';
                    goat++;
                    flag=0;
                }
             }
             else{
             
                    if(isclicked==1){
                    if((clicked.getAttribute('content'))=='2'){
                 selected.style='scale:1';
               selected=clicked;
                   selected.style='scale:2';
                   isclicked=1;
                   k=x;
                   l=y;
                }
                        else if(clicked.getAttribute('content')=='0'){
                        selected.style='scale:1';
                        document.getElementById('p').innerHTML='Tiger Player turn';
                        isclicked=0;
                        clicked.innerHTML=selected.innerHTML;
                        clicked.setAttribute('content','2');                       
                        selected.setAttribute('content','0');
                        selected.innerHTML='';
                        board[x][y]='2';
                        board[k][l]='0';
                        console.log(board);
                        flag=0;
                    }
                    }
                    else{
                        if((clicked.getAttribute('content'))=='2'){
                           selected=clicked;
                           selected.style='scale:2';
                           isclicked=1;
                           k=x;
                           l=y;
                         }
                    }
                }
                
                }
            }
        

       else{
           
                clicked = e.target;
              if(isclicked==1){
                
                 if((clicked.getAttribute('content'))=='1'){
                 selected.style='scale:1';
                   selected=clicked;
                   selected_data=selected.getAttribute('data');
                   selected.style='scale:2';
                   isclicked=1;
                   k=x;
                   l=y;
           
                }else if(clicked.getAttribute('content')=='2'){
                    
                var clicked_data=clicked.getAttribute('data');
                  
                  const commonNode=findCommon(graph2,selected_data,clicked_data);
                  const commonNodeData=getElementByDataAttribute(commonNode);
                  if(commonNodeData.getAttribute('content')==='0'){
                    isclicked=0;
                  commonNodeData.setAttribute('content','1');
                  commonNodeData.innerHTML=selected.innerHTML;
                  clicked.setAttribute('content','0');
                  selected.style='scale:1';
                  selected.setAttribute('content','0');
                  selected.innerHTML="";
                  clicked.innerHTML="";
                  var row___=parseInt(commonNodeData.getAttribute('row'));
                  var col___=parseInt(commonNodeData.getAttribute('column'));
                  board[row___][col___]='1';
                  board[x][y]='0';
                  board[k][l]='0';
                  console.log(board);
                  flag=1;
                  }
                  
                  
                  }
                  else if(graph.hasOwnProperty(selected_data)){
                 for(let o=0;o<graph[selected_data].length;o++){
                     if(graph[selected_data][o]==clicked.getAttribute('data')){
                      
                    
                 document.getElementById('p').innerHTML="Goat player turn remaining "+(21-parseInt(goat));
                
             
                  selected.style='scale:1';
                    clicked.innerHTML=selected.innerHTML;
                  isclicked=0;
                  clicked.setAttribute('content','1');
                  board[x][y]='1';
                  selected.setAttribute('content','0');
                  selected.innerHTML="";
                  board[k][l]='0';
                  console.log(board);
                  flag=1;
                   }
                 }
                  }
                  }
                  
                  
              else{
               
               if((clicked.getAttribute('content'))=='1'){
                   selected=clicked;
                   selected_data=selected.getAttribute('data');
                   selected.style='scale:2';
                   isclicked=1;
                   k=x;
                   l=y;
             } else{
             
               
                }
                
                }
            };
            }
        })(i, j));
         document.getElementById('content').appendChild(div[i][j]);
    }
}
    console.log(board);
