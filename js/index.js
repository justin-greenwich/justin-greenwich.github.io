var arr = [
	{question: "Quần rộng nhất là quần gì ?",a: "A. Quần dài",b: "B. Quần short",c: "C. Quần đảo",d: "D. Quần đùi",dapandung: 3},
	{question: "Nếu chỉ có một que diêm, trong một ngày mùa đông giá rét, bạn bước vào căn phòng có một cây đèn, một bếp dầu, và một bếp củi, bạn thắp gì trước tiên?",a: "A. Cây đèn",b: "B. Bếp dầu",c: "C. Que diêm",d: "D. Bếp củi",dapandung: 3},
	{question: "2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?",a: "A. 4",b: "B. 3",c: "C. 2",d: "D. 1",dapandung: 1},
	{question: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?",a: "A. Mực",b: "B. Bút bi",c: "C. Bút chì",d: "D. Than",dapandung: 4},
	{question: "Lịch nào dài nhất ?",a: "A. Lịch tây",b: "B. Lịch sử",c: "C. Lịch ta",d: "D. Lịch vạn niên",dapandung: 2},
	{question: "Núi nào mà bị chặt ra từng khúc",a: "A. Thái sơn",b: "B. Ngũ Hành Sơn",c: "C. Hoàng Liên Sơn",d: "D. Phan Xi Păng",dapandung: 1},
	{question: "Con đường dài nhất là đường nào",a: "A. Thành Công",b: "B. Đê La Thành",c: "C. Đường Đời",d: "D. Đường Kim Mã",dapandung: 3},
	{question: "Cái gì đi thì nằm , đứng cũng nằm , nhưng nằm thì đứng",a: "A. Bàn tay",b: "B. Bàn chân",c: "C. Đầu gối",d: "D. Cánh tay",dapandung: 2},
	{question: "Môn gì càng thắng càng thua ?",a: "A. Vovinam",b: "B. Tennis",c: "C. Bóng rổ",d: "D. Đua xe đạp",dapandung: 4},
	{question: "Con gì đầu dê mình ốc ?",a: "A. Con dê",b: "B. Con ốc",c: "C. Con dốc",d: "D. Con sư tử",dapandung: 3},
	{question: "Quần rộng nhất là quần gì ?",a: "A. Quần dài",b: "B. Quần short",c: "C. Quần đảo",d: "D. Quần đùi",dapandung: 3},
	{question: "Nếu chỉ có một que diêm, trong một ngày mùa đông giá rét, bạn bước vào căn phòng có một cây đèn, một bếp dầu, và một bếp củi, bạn thắp gì trước tiên?",a: "A. Cây đèn",b: "B. Bếp dầu",c: "C. Que diêm",d: "D. Bếp củi",dapandung: 3},
	{question: "2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?",a: "A. 4",b: "B. 3",c: "C. 2",d: "D. 1",dapandung: 1},
	{question: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?",a: "A. Mực",b: "B. Bút bi",c: "C. Bút chì",d: "D. Than",dapandung: 4},
	{question: "Lịch nào dài nhất ?",a: "A. Lịch tây",b: "B. Lịch sử",c: "C. Lịch ta",d: "D. Lịch vạn niên",dapandung: 2},
	{question: "Núi nào mà bị chặt ra từng khúc",a: "A. Thái sơn",b: "B. Ngũ Hành Sơn",c: "C. Hoàng Liên Sơn",d: "D. Phan Xi Păng",dapandung: 1},
	{question: "Con đường dài nhất là đường nào",a: "A. Thành Công",b: "B. Đê La Thành",c: "C. Đường Đời",d: "D. Đường Kim Mã",dapandung: 3},
	{question: "Cái gì đi thì nằm , đứng cũng nằm , nhưng nằm thì đứng",a: "A. Bàn tay",b: "B. Bàn chân",c: "C. Đầu gối",d: "D. Cánh tay",dapandung: 2},
	{question: "Môn gì càng thắng càng thua ?",a: "A. Vovinam",b: "B. Tennis",c: "C. Bóng rổ",d: "D. Đua xe đạp",dapandung: 4},
	{question: "Con gì đầu dê mình ốc ?",a: "A. Con dê",b: "B. Con ốc",c: "C. Con dốc",d: "D. Con sư tử",dapandung: 3},
	{question: "Quần rộng nhất là quần gì ?",a: "A. Quần dài",b: "B. Quần short",c: "C. Quần đảo",d: "D. Quần đùi",dapandung: 3},
	{question: "Nếu chỉ có một que diêm, trong một ngày mùa đông giá rét, bạn bước vào căn phòng có một cây đèn, một bếp dầu, và một bếp củi, bạn thắp gì trước tiên?",a: "A. Cây đèn",b: "B. Bếp dầu",c: "C. Que diêm",d: "D. Bếp củi",dapandung: 3},
	{question: "2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?",a: "A. 4",b: "B. 3",c: "C. 2",d: "D. 1",dapandung: 1},
	{question: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?",a: "A. Mực",b: "B. Bút bi",c: "C. Bút chì",d: "D. Than",dapandung: 4},
	{question: "Lịch nào dài nhất ?",a: "A. Lịch tây",b: "B. Lịch sử",c: "C. Lịch ta",d: "D. Lịch vạn niên",dapandung: 2},
	{question: "Núi nào mà bị chặt ra từng khúc",a: "A. Thái sơn",b: "B. Ngũ Hành Sơn",c: "C. Hoàng Liên Sơn",d: "D. Phan Xi Păng",dapandung: 1},
	{question: "Con đường dài nhất là đường nào",a: "A. Thành Công",b: "B. Đê La Thành",c: "C. Đường Đời",d: "D. Đường Kim Mã",dapandung: 3},
	{question: "Cái gì đi thì nằm , đứng cũng nằm , nhưng nằm thì đứng",a: "A. Bàn tay",b: "B. Bàn chân",c: "C. Đầu gối",d: "D. Cánh tay",dapandung: 2},
	{question: "Môn gì càng thắng càng thua ?",a: "A. Vovinam",b: "B. Tennis",c: "C. Bóng rổ",d: "D. Đua xe đạp",dapandung: 4},
	{question: "Con gì đầu dê mình ốc ?",a: "A. Con dê",b: "B. Con ốc",c: "C. Con dốc",d: "D. Con sư tử",dapandung: 3},
	{question: "Quần rộng nhất là quần gì ?",a: "A. Quần dài",b: "B. Quần short",c: "C. Quần đảo",d: "D. Quần đùi",dapandung: 3},
	{question: "Nếu chỉ có một que diêm, trong một ngày mùa đông giá rét, bạn bước vào căn phòng có một cây đèn, một bếp dầu, và một bếp củi, bạn thắp gì trước tiên?",a: "A. Cây đèn",b: "B. Bếp dầu",c: "C. Que diêm",d: "D. Bếp củi",dapandung: 3},
	{question: "2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?",a: "A. 4",b: "B. 3",c: "C. 2",d: "D. 1",dapandung: 1},
	{question: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?",a: "A. Mực",b: "B. Bút bi",c: "C. Bút chì",d: "D. Than",dapandung: 4},
	{question: "Lịch nào dài nhất ?",a: "A. Lịch tây",b: "B. Lịch sử",c: "C. Lịch ta",d: "D. Lịch vạn niên",dapandung: 2},
	{question: "Núi nào mà bị chặt ra từng khúc",a: "A. Thái sơn",b: "B. Ngũ Hành Sơn",c: "C. Hoàng Liên Sơn",d: "D. Phan Xi Păng",dapandung: 1},
	{question: "Con đường dài nhất là đường nào",a: "A. Thành Công",b: "B. Đê La Thành",c: "C. Đường Đời",d: "D. Đường Kim Mã",dapandung: 3},
	{question: "Cái gì đi thì nằm , đứng cũng nằm , nhưng nằm thì đứng",a: "A. Bàn tay",b: "B. Bàn chân",c: "C. Đầu gối",d: "D. Cánh tay",dapandung: 2},
	{question: "Môn gì càng thắng càng thua ?",a: "A. Vovinam",b: "B. Tennis",c: "C. Bóng rổ",d: "D. Đua xe đạp",dapandung: 4},
	{question: "Con gì đầu dê mình ốc ?",a: "A. Con dê",b: "B. Con ốc",c: "C. Con dốc",d: "D. Con sư tử",dapandung: 3}


];
var position = 0;
var count = 0;
var buttonA = $("#answerA");
var buttonB = $("#answerB");
var buttonC = $("#answerC");
var buttonD = $("#answerD");
var progressbar = $("#progress");
var alertDialog = $("#alert");
var alertContent = $("#alert-content");
var buttonOK = $("#btnOK");
var content_question = $("#content-question");
var contentA = $("#contentA");
var contentB = $("#contentB");
var contentC = $("#contentC");
var contentD = $("#contentD");
var run;
function init() {
	progressbar.attr("value", "100");
	position = Math.floor((Math.random() * 40) + 1);
	content_question.text(arr[position].question);
	contentA.text(arr[position].a);
	contentB.text(arr[position].b);
	contentC.text(arr[position].c);
	contentD.text(arr[position].d);
}
init();
function handle() {
	count = 0;
	alertDialog.css("display","block");
	alertContent.text("You Lose");
}
function move() {
	var max = progressbar.attr("max");
	var val = progressbar.attr("value");
	var time = (1000 / max) * 5;
	run = setInterval(function () {
		/* body... */
		if(val == 0) {	
			clearInterval(run);
			handle();
			return;
		}
		val--;
		progressbar.attr("value", val);
	}, time);
}
move();
function changeQuestion() {
	content_question.text(arr[position].question);
	contentA.text(arr[position].a);
	contentB.text(arr[position].b);
	contentC.text(arr[position].c);
	contentD.text(arr[position].d);
}
function check() {
	buttonA.click(function() {
		/* Act on the event */
		if(arr[position].dapandung == 1) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.css("display","block");
				alertContent.text("You Win");
				//progressbar.setAttribute("value", "100");
			}
			else {
				clearInterval(run);
				progressbar.attr("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.css("display","block");
			alertContent.text("You Lose");
			//progressbar.setAttribute("value", "100");
		}
	});
	buttonB.click(function() {
		/* Act on the event */
		if(arr[position].dapandung == 2) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.css("display","block");
				alertContent.text("You Win");
				//progressbar.setAttribute("value", "100");			
			}
			else {
				clearInterval(run);
				progressbar.attr("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.css("display","block");
			alertContent.text("You Lose");
			//progressbar.setAttribute("value", "100");
		}
	});
	buttonC.click(function() {
		/* Act on the event */
		if(arr[position].dapandung == 3) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.css("display","block");
				alertContent.text("You Win");
				//progressbar.setAttribute("value", "100");
			}
			else {
				clearInterval(run);
				progressbar.attr("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.css("display","block");
			alertContent.text("You Lose");
			//progressbar.setAttribute("value", "100");
		}
	});	
	buttonD.click(function(event) {
		/* Act on the event */
		if(arr[position].dapandung == 4) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.css("display","block");
				alertContent.text("You Win");
				//progressbar.setAttribute("value", "100");
			}
			else {
				clearInterval(run);
				progressbar.attr("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.css("display","block");
			alertContent.text("You Lose");
			//progressbar.setAttribute("value", "100");
		}
	});
	buttonOK.click(function() {
		/* Act on the event */
		alertDialog.css("display","none");
		init();
	});
}
check();

function Caculator() {
	var a  = 10;
	var b = 11;
	var sum = a  + b;
	var sub = a - b;
	var mul = a * b;
	var quotient = a / b;
	var remainder = a % b;
	console.log('Sum : ' + sum);
	console.log('Sub : ' + sub);
	console.log('Mul : ' + mul);
	console.log("Quotient : " + quotient);
	console.log('Remainder : ' + remainder);
}

