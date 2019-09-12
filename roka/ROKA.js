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
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);

var bar2 = new ProgressBar.Line(apbar2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar2.animate(1.0);

var bar3 = new ProgressBar.Line(apbar3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar3.animate(1.0);

var bar4 = new ProgressBar.Line(apbar4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar4.animate(1.0);