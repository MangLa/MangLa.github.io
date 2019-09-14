var app = new Vue({
  el: '#app',
  data: {
    percent:100 ,
    Dday:'',
    armytype:'육군',
    type1:true,
    type2:false,
    type3:false,
	dayrender:false
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
    },
	armyrender: function(){
		this.dayrender=true;
		
bar.animate(1.0);
	}
  }
})
//진행막대기
var bar;
bar = new ProgressBar.Line(apbar, {
  trailColor: '#fff',
  trailWidth: 1,
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1300,
  color: '#FFFFFF',
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#111',
      right: '0',
      top: '30px',
      padding: 0,
      margin:'0 1 0 0',
	  float: 'right',
      transform: null
    },
    autoStyleContainer: false
  },
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFFFFF'},
  to: {color: '#eb4d4d'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
	bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
