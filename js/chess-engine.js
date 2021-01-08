var board = null;
var newGame = new Chess();

function onStart(source, position, piece, status)
{
    if(newGame.game_over())
    {
        return false;
    }
    if(piece.search(/^b/) !== -1)
    {
        return false;
    }
}

function randomMove()
{
    var possibleMovements = newGame.moves();
    if(possibleMovements.length() == 0)
    {
        return;
    }
    var randomIndex = Math.floor(Math.random() * possibleMovements.length)
    newGame.move(possibleMovements[randomIndex])
    board.position(newGame.fen())
}

function moveFromSource(source, destination)
{
   var newMove =  newGame.move({
    to: destination,
    from:source,
    promotion:'q'
})
if (newMove == null)
{
    return 'snapback';
}

window.setTimeout(randomMoves, 250);

}

function updateBoard()
{
    board.position(newGame.fen());
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onStart,
    onDragMove: moveFromSource,
    onSnapEnd: updateBoard
}

board = Chessboard(myBoard, config)