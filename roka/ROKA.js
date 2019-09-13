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
	 this.percent+=2;
    }
  }
})
//진행막대기
var bar = new ProgressBar.Line(apbar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1300,
  color: '#FFFFFF',
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFFFFF'},
  to: {color: '#eb4d4d'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});



var bar2 = new ProgressBar.Line(apbar2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1800,
  color: '#FFFFFF',
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFFFFF'},
  to: {color: '#ffa01c'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

var bar3 = new ProgressBar.Line(apbar3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2300,
  color: '#FFFFFF',
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFFFFF'},
  to: {color: '#5ded58'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});



var bar4 = new ProgressBar.Line(apbar4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2800,
  color: '#FFFFFF',
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFFFFF'},
  to: {color: '#3599db'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});
bar4.animate(1.0);
bar3.animate(1.0);
bar2.animate(1.0);
bar.animate(1.0);