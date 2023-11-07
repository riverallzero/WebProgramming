// 웹 페이지로부터 점수가 오기를 기다린다.
onmessage = function (e) {
	let grade="F"; // 디폴트
	let score = e.data;
	score = parseInt(score);
	switch(Math.floor(score/10)) {
		case 10 : case 9 : grade = "A"; break; 
		case 8 : grade = "B"; break; 
		case 7 : grade = "C"; break; 
		case 6 : grade = "D"; break;
		default :
	}
	postMessage(grade);
}
