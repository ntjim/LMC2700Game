function Game(Input, graphicsFrontend, player, meteorSpawner, enemySpawner, entityList) {
    this.Input = Input;
    this.graphicsFrontend = graphicsFrontend;
    this.meteorSpawner = meteorSpawner;
    this.enemySpawner = enemySpawner;
    this.entityList = entityList;
    
    this.update = function() {
        return false; //TODO: The Game
    }
    
    this.gameOver = function() {
        //Void Function //TODO: Setup GameOver functionality; Return Highscores, etc.
    }
    
    this.checkCollisions = function() {
        //Void Function //TODO: create a collision checking function to run every frame.
    }
}

export default Game;