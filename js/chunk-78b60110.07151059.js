(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b60110"],{"0639":function(t,e,i){},"24b4":function(t,e,i){"use strict";i.r(e);var h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ring"},[i("canvas",{attrs:{id:t.id}})])},r=[],s={props:{id:String,title:String,color:String},name:"",data(){return{}},methods:{drawRing(){var t=document.getElementById(this.id),e=t.getContext("2d");t.width=.8*this.$el.offsetWidth,t.height=.8*this.$el.offsetHeight,e.lineWidth=2,e.strokeStyle="#16417F",e.save(),e.beginPath(),e.arc(t.width/2-5,t.height/2,t.height/2-6,0,2*Math.PI,!1),e.stroke(),e.restore(),e.save(),e.beginPath(),e.arc(t.width/2-5,t.height/2,t.height/2-12,0,2*Math.PI,!1),e.stroke(),e.restore();var i=60,h=60,r=3.6*i-90,s=3.6*h-60;e.lineWidth=6,e.lineCap="round",e.save(),e.strokeStyle="#035EFF",e.beginPath(),e.arc(t.width/2-5,t.height/2,t.height/2-6,-Math.PI/2,r*Math.PI/180,!1),e.stroke(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=this.color,e.arc(t.width/2-5,t.height/2,t.height/2-12,-Math.PI/6,s*Math.PI/180,!1),e.stroke(),e.restore(),e.save(),e.font="14px Microsoft YaHei",e.fillStyle="#fff",this.title.length>4?e.fillText(this.title,t.width/2-25,t.height/2+3):e.fillText(this.title,t.width/2-20,t.height/2+3),e.restore()}},mounted(){this.drawRing()}},a=s,n=(i("55d5"),i("2877")),o=Object(n["a"])(a,h,r,!1,null,"20c8244e",null);e["default"]=o.exports},"55d5":function(t,e,i){"use strict";i("0639")}}]);
//# sourceMappingURL=chunk-78b60110.07151059.js.map