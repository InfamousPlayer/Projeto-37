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
    form.hide();
    // escreva o código aqui para mudar a cor de fundo

    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz

    // chame getContestantInfo () aqui
    Contestant.getContestantInfo();
    
    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      TextTrack("Jogador que respondeu a resposta correta e destacado na cor verde",130,230);

    }

    // escreva a condição para verificar se contestantInfor não é indefinido
    
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else 
        fill("red");
    }
  }

}
