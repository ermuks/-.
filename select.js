
	var amst = 5;
	
function iselect(inf){
	var i = 0;
	var tw = inf.getAttribute("tw");
	document.getElementById("itemtrade").innerHTML = inf.getAttribute("c_trade");
	if(inf.getAttribute("st") != ""){
		document.getElementById("itemsoulname").innerHTML = inf.getAttribute("st") +"의";
		document.getElementById("itemsoulname").style.display = "block";
		document.getElementsByName("cell")[2].style.display = "block";
	}else{
		document.getElementById("itemsoulname").innerHTML = "";
		document.getElementById("itemsoulname").style.display = "none";
		document.getElementsByName("cell")[2].style.display = "none";
	}
	if(Number(inf.getAttribute("up")) > 0){
		document.getElementById("itemname").innerHTML = inf.getAttribute("iname") +" (+" + inf.getAttribute("up") + ")";
	}else{
		document.getElementById("itemname").innerHTML = inf.getAttribute("iname");
	}
	for(i = 2; i <= 18; i++){
		instring(inf, i - 1);
	}
	for(i = 19; i <= 24; i++){
		ectoption(inf, i);
	}
	for(i = 0; i < 3; i++){
		poten(inf, i);
	}
	if(inf.getAttribute("tip1") == ""){
		document.getElementsByName("cell")[3].style.display = "none";
	}else{
		document.getElementsByName("cell")[3].style.display = "block";
		for(i = 0; i < 6; i ++){
			if(inf.getAttribute("tip" + String(i+1)) != ""){
				document.getElementsByName("tipline")[i].style.display = "block";
				document.getElementsByName("tips")[i].innerHTML = inf.getAttribute("tip" + String(i+1));
			}else{
				document.getElementsByName("tipline")[i].style.display = "none";
			}
		}
	}
	if(inf.getAttribute("sjt") != ""){
		document.getElementsByName("iteminfotype")[0].className = "iteminfo s";
		document.getElementsByName("jsname")[0].style.display = "block";
		document.getElementsByName("jsname")[0].innerHTML = inf.getAttribute("sjt") + " 착용 가능";
	}else{
		document.getElementsByName("iteminfotype")[0].className = "iteminfo n";
		document.getElementsByName("jsname")[0].style.display = "none";
	}
	for(i = 0 ; i < 6 ; i ++){
		document.getElementsByName("juse")[i].className = "j" + i + inf.getAttribute("j" + i);
	}
	document.getElementsByName("iicon")[0].style.background = inf.style.background;
	document.getElementsByName("iicon")[0].style.marginLeft = String(Number(inf.style.marginLeft.split("px")[0]) + 22) + "px";
	document.getElementsByName("iicon")[0].style.marginTop = String(Number(inf.style.marginTop.split("px")[0]) + 23) + "px";
	if(amst > 15){
		document.getElementById("star2").style.display = "block";
		if(amst <= 20){
			starlvdisable(1,1,1,0);
		}else{
			starlvdisable(1,1,1,1);
		}
	}else{
		document.getElementById("star2").style.display = "none";
		if(amst <= 5){
			starlvdisable(0,0,0,0);
		}else if(amst <= 8){
			starlvdisable(1,0,0,0);
		}else if(amst <= 10){
			starlvdisable(1,1,0,0);
		}else{
			starlvdisable(1,1,1,0);
		}
	}
	document.getElementById("star1").className = "s" + String(amst);
	document.getElementById("star2").className = "s" + String(amst);
	if(inf.getAttribute("nost") == "1"){
		document.getElementById("starforce").style.display = "none";
	}else{
		document.getElementById("starforce").style.display = "block";
	}
	for(i = 0 ; i < 25 ; i ++){
		if(i < amst){
			document.getElementsByName("star")[i].style.display = "block";
			
			if(i < Number(inf.getAttribute("o5"))){
				if(inf.getAttribute("sp") != "0"){
					document.getElementsByName("star")[i].id = "starb";
				}else{
					document.getElementsByName("star")[i].id = "stary";
				}
			}else{
				document.getElementsByName("star")[i].id = "star";
			}
		}else{
			document.getElementsByName("star")[i].style.display = "none";
		}
	}
	var str_tw = "";
	if(tw == "1"){
		str_tw = "무기종류 : ";
		document.getElementsByName("item_basic")[1].style.display = "block";
		if(Number(inf.getAttribute("t2")) <= 3){
			document.getElementsByName("item_basic")[1].innerHTML = "공격속도 : 매우 빠름";
		}else if(Number(inf.getAttribute("t2")) <= 5){
			document.getElementsByName("item_basic")[1].innerHTML = "공격속도 : 빠름";
		}else if(Number(inf.getAttribute("t2")) <= 6){
			document.getElementsByName("item_basic")[1].innerHTML = "공격속도 : 보통";
		}else if(Number(inf.getAttribute("t2")) <= 8){
			document.getElementsByName("item_basic")[1].innerHTML = "공격속도 : 느림";
		}else {
			document.getElementsByName("item_basic")[1].innerHTML = "공격속도 : 매우 느림";
		}
	}else{
		str_tw = "장비종류 : ";
		document.getElementsByName("item_basic")[1].style.display = "none";
	}
	document.getElementsByName("item_basic")[0].innerHTML = str_tw + inf.getAttribute("t1");
	var rlev = Number(inf.getAttribute("rlev"));
	var rstr = Number(inf.getAttribute("rstr"));
	var rdex = Number(inf.getAttribute("rdex"));
	var rint = Number(inf.getAttribute("rint"));
	var rluk = Number(inf.getAttribute("rluk"));
	
	var brstr = "d";
	var brdex = "d";
	var brint = "d";
	var brluk = "d";
	
	if(rstr != 0) brstr = "e";
	if(rdex != 0) brdex = "e";
	if(rint != 0) brint = "e";
	if(rluk != 0) brluk = "e";
	document.getElementsByName("reqStat")[0].className = "STR " + brstr;
	document.getElementsByName("reqStat")[1].className = "LUK " + brluk;
	document.getElementsByName("reqStat")[2].className = "DEX " + brdex;
	document.getElementsByName("reqStat")[3].className = "INT " + brint;
	for(i = 2 ; i >= 0 ; i--){
		document.getElementsByName("rlev")[2 - i].className = "y" + parseInt(rlev / Math.pow(10, i));
		
		document.getElementsByName("rstr")[2 - i].className = brstr + parseInt(rstr / Math.pow(10, i));
		document.getElementsByName("rdex")[2 - i].className = brdex + parseInt(rdex / Math.pow(10, i));
		document.getElementsByName("rint")[2 - i].className = brint + parseInt(rint / Math.pow(10, i));
		document.getElementsByName("rluk")[2 - i].className = brluk + parseInt(rluk / Math.pow(10, i));
		
		rlev %= Math.pow(10, i);
		rstr %= Math.pow(10, i);
		rdex %= Math.pow(10, i);
		rint %= Math.pow(10, i);
		rluk %= Math.pow(10, i);
	}
}

function starlvdisable(d1, d2, d3, d4){
	if(d1 == 0) d1 = "none"; else d1 = "block";
	if(d2 == 0) d2 = "none"; else d2 = "block";
	if(d3 == 0) d3 = "none"; else d3 = "block";
	if(d4 == 0) d4 = "none"; else d4 = "block";
	document.getElementsByName("starlv")[0].style.display = d1;
	document.getElementsByName("starlv")[1].style.display = d2;
	document.getElementsByName("starlv")[2].style.display = d3;
	document.getElementsByName("starlv")[3].style.display = d4;
}

function ectoption(a, v){
	var reqlv = Number(a.getAttribute("rlev"));
	var sp = Number(a.getAttribute("sp"));
	
	if(reqlv >= 140){
		amst = 25;
	}else{
		if(reqlv >= 130){
			amst = 20;
		}else{
			if(reqlv >= 120){
				amst = 15;
			}else{
				if(reqlv >= 108){
					amst = 10;
				}else{
					if(reqlv >= 98){
						amst = 8;
					}
				}
			}
		}
	}
	
	if(amst > 15 && sp != "0"){
		amst = 15;
	}
	
	var str = ['착용 레벨 감소 : [dt]', '업그레이드 가능 횟수 : [dt]', '가위 사용 가능 횟수 : [dt]회', 
			   '황금망치 제련 적용', '[dt]성 강화 적용 (최대 [dt0]성)', '강화 불가'];
	
	document.getElementsByName("item_basic")[v].innerHTML = str[v - 19].replace("[dt]", a.getAttribute("o" + String(v - 18))).replace("[dt0]", amst);
	
	if(a.getAttribute("o" + String(v - 18)) == "-1" || a.getAttribute("o" + String(v - 18)) == "0"){
		if(v != 20){
			document.getElementsByName("item_basic")[v].style.display = "none";
		}else{
			if(a.getAttribute("o" + String(v - 18)) == "-1"){
				document.getElementsByName("item_basic")[v].style.display = "none";
			}else{
				document.getElementsByName("item_basic")[v].style.display = "block";
			}
		}
	}else{
		document.getElementsByName("item_basic")[v].style.display = "block";
	}
		
}

function poten(a, v){
	var poteantial = 
	['STR : +[data]', 'DEX : +[data]', 'INT : +[data]', 'LUK : +[data]', '올스탯 : +[data]',
	 '최대 HP : +[data]', '최대 MP : +[data]',
	 '공격력 : +[data]', '마력 : +[data]', '방어력 : +[data]', 
	 '이동속도 : ', '점프력 : ', 
	 
	 'STR : +[data]%', 'DEX : +[data]%', 'INT : +[data]%', 'LUK : +[data]%', '올스탯 : +[data]%',
	 '최대 HP : +[data]%', '최대 MP : +[data]%', 
	 '공격력 : +[data]%', '마력 : +[data]%', '방어력 : +[data]%', '크리티컬 확률 : +[data]%',
	 
	 '메소 획득량 : +[data]%', '아이템 획득 확률 : +[data]%',
	 '보스 몬스터 공격 시 데미지 +[data]%', '몬스터 방어율 무시 : +[data]%', '데미지 : +[data]%', '크리티컬 데미지 : +[data]%'];
	 
	var p = a.getAttribute("p" + String(v + 1));
	var e = a.getAttribute("e" + String(v + 1));
	
	document.getElementsByName("poten_basic")[v].innerHTML = p;
	document.getElementsByName("poten_basic")[v + 3].innerHTML = "+ " + e;
	
	
	document.getElementsByName("poten_level")[0].className = a.getAttribute("pt");
	document.getElementsByName("poten_level")[1].className = a.getAttribute("et");
}

function instring(a, v){
	var str = 
	['STR : ', 'DEX : ', 'INT : ', 'LUK : ', '최대 HP : ', '최대 MP : ', '최대 HP : ', '최대 MP : ', 
	 '공격력 : ', '마력 : ', '방어력 : ', '이동속도 : ', '점프력 : ', 
	 '보스 몬스터 공격 시 데미지 ', '몬스터 방어율 무시 : ', '데미지 : ', '올스탯 : '];
	var r = a.getAttribute("s" + String(v));
	r = r.split(",");
	var e = "";
	var txt = str[v-1];
	var uf = "<font id=\"upop\">";
	var af = "<font id=\"addop\">";
	var ff = "</font>";
	var p = ['', '', '', '', '', '', '%', '%', '', '', '', '', '', '%', '%', '%', '%'];
	if(r[0] != "0"){
		if(r[1] == "0"){
			if(r[2] == "0"){
				e = txt + "+" + r[0] + p[v-1];
			}else{
				e = uf + txt + "+" + (Number(r[0])+Number(r[2])) + p[v-1] + ff + " (" + r[0] + p[v-1] + uf + " +" + r[2] + p[v-1] + ff + ")";
			}
		}else{
			if(r[2] == "0"){
				e = uf + txt + "+" + (Number(r[0])+Number(r[1])) + p[v-1] + ff + " (" + r[0] + p[v-1] + af + " +" + r[1] + p[v-1] + ff + ")";
			}else{
				e = uf + txt + "+" + (Number(r[0])+Number(r[1])+Number(r[2])) + p[v-1] + ff + " (" + r[0] + p[v-1] + af + " +" + r[1] + p[v-1] + ff + uf + " +" + r[2] + p[v-1] + ff + ")";
			}
		}
	}else{
		if(r[1] == "0"){
			if(r[2] == "0"){
				e = "none";
			}else{
				e = uf + txt + "+" + (Number(r[2])) + p[v-1] + ff + " (0" + p[v-1] + uf + " +" + r[2] + p[v-1] + ff + ")";
			}
		}else{
			if(r[2] == "0"){
				e = uf + txt + "+" + (Number(r[1])) + p[v-1] + ff + " (0" + p[v-1] + af + " +" + r[1] + p[v-1] + ff + ")";
			}else{
				e = uf + txt + "+" + (Number(r[1])+Number(r[2])) + p[v-1] + ff + " (0" + p[v-1] + af + " +" + r[1] + p[v-1] + ff + uf + " +" + r[2] + p[v-1] + ff + ")";
			}
		}
	}
	document.getElementsByName("item_basic")[v + 1].innerHTML = e;
	if(e == "none"){
		document.getElementsByName("item_basic")[v + 1].style.display = "none";
	}else{
		document.getElementsByName("item_basic")[v + 1].style.display = "block";
	}
	//마력 : +1098
	//<font id="upop">마력 : +1098</font> (482<font id="upop"> +318</font>)
	
	//<font id="upop">마력 : +1098</font> (482<font id="addop"> +298</font>)
	//<font id="upop">마력 : +1098</font> (482<font id="addop"> +298</font><font id="upop"> +318</font>)
}
