var app = new Vue({
  el: '#app',
  data: {
    percent:100 ,
    Dday:0,
    armytype:'육군',
    type1:true,
    type2:false,
    type3:false
  },
  methods: {
    typeset: function (type) {
      if(type=='1'){
      	this.type1=true;
        this.type2=false;
        this.type3=false;
        this.armytype='육군'
      }else if(type=='2'){
      	this.type1=false;
        this.type2=true;
        this.type3=false;
        this.armytype='해군'
      }else if(type=='3'){
      	this.type1=false;
        this.type2=false;
        this.type3=true;
        this.armytype='공군'
      }
    }
  }
})