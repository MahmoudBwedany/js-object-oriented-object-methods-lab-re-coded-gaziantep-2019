class BoardMember {
  constrocutor (name, homeState, training){
    this.training = training;
    this.name = name;
    this.homeState = homeState;
    
    
  }
  
  veto (){
    return ("No, I must disagree");
    
  }
  
  approve () {
    return ("You can do that!");
  }
  
  doCharity () {
    return ("I like to help people.");
  }
  
  releasePressStatement (){
    return ("You will see great things from Scuber");
    
  }
  
}