class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    question.hide();
    background("blue");
    fill(0);
    textSize(30);
    text("Resultado do Questionario",340, 350);
    text("-------------------------",320, 65);
    // escreva o código aqui para mudar a cor de fundo
    
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz

    // chame getContestantInfo () aqui
    Contestant.getContestantInfo();
    
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("Jogador que respondeu a resposta correta e destacado na cor verde",130,230);

    

    // escreva a condição para verificar se contestantInfor não é indefinido
    
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      debugger;
      var correctAns = "3";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else 
        fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
    }
  }

}

}
