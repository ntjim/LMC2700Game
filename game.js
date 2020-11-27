function Game(Input, graphicsFrontend, player, meteorSpawner, enemySpawner, entityList) {
    this.Input = Input;
    this.graphicsFrontend = graphicsFrontend;
    this.meteorSpawner = meteorSpawner;
    this.enemySpawner = enemySpawner;
    this.entityList = entityList;
    
    this.update = function() {
        return false;
    }
    
    this.gameOver = function() {
        //Void Function
    }
    
    this.checkCollisions = function() {
        //Void Function
    }
}

export default Game;