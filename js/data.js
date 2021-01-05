//游戏分值计算
var dataObj=function()
{
	this.fruitNum=0;//大鱼吃果实数量
	this.double=1;//是否吃到蓝色果实(吃一个蓝色果实分值增倍)
	this.score=0;//分值
	this.gameOver=false;//游戏的初始状态
	this.alpha=0;//字体透明度


}



//在画布1上画出：大鱼吃果实数量（未喂小鱼之前），大鱼游戏分值
dataObj.prototype.draw=function()
{

    //画布宽高
    var w = can1.width;
    var h = can1.height;

    ctx1.save();
    ctx1.fillStyle = "#fff";
    ctx1.font = "20px Verdana";
    ctx1.shadowColor = "white";
    ctx1.shadowBlur = 5;
    ctx1.fillText("可喂果实：", 50, 80);
    ctx1.fillText("宝宝生命：", 50, 50);

    ctx1.fillStyle = "rgba(255,236,172,0.3)";
    ctx1.fillRect(130,35,200,13) ;
    ctx1.fillRect(130,65,200,13);


    var sInScore = new String(this.score);
    var ls = sInScore.length;
    var s = new String();
    for (var a = 0; a < (8-ls); a++) s += "0";
    for (var b = 0; b < sInScore.length; b++) s += "" + sInScore.substring(b,b+1);
    writeText(s,180,20,28,"Arial");
    //   if(gameStarted) {
    var bar = Math.round((19 - baby.babyBodyCount)/19 * 196);   //宝宝生命值
    ctx1.fillStyle = "#EE5500";
    ctx1.fillRect(132,36,bar,11);
    if(this.fruitNum < 19) {           //可喂果实
        bar = Math.round(this.fruitNum / 19 * 196);
        ctx1.fillStyle = "#44ee33";
//        }else{
//            bar = 196;
//            ctx1.fillStyle = "#eedd00"
//        }
        ctx1.fillRect(132,66,bar,11);
        ctx1.restore();
    }


    ctx1.save();
	ctx1.shadowBlur=10;//设置阴影
	ctx1.shadowColor="#fff";
	ctx1.fillStyle="white";
    ctx1.fillText("score:"+this.score,canWidth*0.5,canHeight-20);




    if(this.gameOver)//游戏结束，屏幕上出现GMAEOVER
    {
    	this.alpha+=deltaTime*0.0005;
    	if(this.alpha>1)
    	   this.alpha=1;
    	ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";//设置字体颜色及透明度
    	ctx1.fillText("game over",canWidth*0.5,canHeight*0.5);



    }
   ctx1.restore();
}
dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}


function writeText(t,x,y,s,f,c)
{
    var sx = x;
    var grid = {};
    grid.w = 10;
    grid.h = 16;
    var text = new String(t);
    //text = text.toUpperCase();
    ctx1.save();
    var ss = "";
    ctx1.font = "normal "+s+"px '"+f+"', Sans-Serif";

    ctx1.textAlign = "center";
    ctx1.fillStyle = c ? c : "#ffffff";
    ctx1.fillText(text, x,y+8);
    ctx1.restore();
}
