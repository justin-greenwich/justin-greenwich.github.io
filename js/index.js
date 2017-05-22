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
var buttonA = document.getElementById("answerA");
var buttonB = document.getElementById("answerB");
var buttonC = document.getElementById("answerC");
var buttonD = document.getElementById("answerD");
var progressbar = document.getElementById("progress");
var alertDialog = document.getElementById("alert");
var alertContent = document.getElementById("alert-content");
var buttonOK = document.getElementById("btnOK");
var run;
function init() {
	progressbar.setAttribute("value", "100");
	position = Math.floor((Math.random() * 40) + 1);
	document.getElementById("content-question").innerText = arr[position].question;
	document.getElementById("contentA").innerText = arr[position].a;
	document.getElementById("contentB").innerText = arr[position].b;
	document.getElementById("contentC").innerText = arr[position].c;
	document.getElementById("contentD").innerText = arr[position].d;
}
init();
function move() {
	var max = progressbar.getAttribute("max");
	var val = progressbar.getAttribute("value");
	var time = (1000 / max) * 3;
	run = setInterval(function () {
		/* body... */
		if(val == 0) {
			count = 0;
			clearInterval(run);
			alertDialog.style.display = "block";
			alertContent.innerText = "You Lose";
			return;
		}
		val--;
		progressbar.setAttribute("value", val);
	}, time);
}
move();
function changeQuestion() {
	document.getElementById("content-question").innerText = arr[position].question;
	document.getElementById("contentA").innerText = arr[position].a;
	document.getElementById("contentB").innerText = arr[position].b;
	document.getElementById("contentC").innerText = arr[position].c;
	document.getElementById("contentD").innerText = arr[position].d;
}
function check() {
	buttonA.addEventListener("click", function () {
	/* body... */
		if(arr[position].dapandung == 1) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.style.display = "block";
				alertContent.innerText = "You Win";
				//progressbar.setAttribute("value", "100");
			}
			else {
				clearInterval(run);
				progressbar.setAttribute("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.style.display = "block";
			alertContent.innerText = "You Lose";
			//progressbar.setAttribute("value", "100");
		}
	});
	buttonB.addEventListener("click", function () {
		/* body... */
		if(arr[position].dapandung == 2) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.style.display = "block";
				alertContent.innerText = "You Win";
				//progressbar.setAttribute("value", "100");			
			}
			else {
				clearInterval(run);
				progressbar.setAttribute("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.style.display = "block";
			alertContent.innerText = "You Lose";
			//progressbar.setAttribute("value", "100");
		}
	});
	buttonC.addEventListener("click", function () {
		/* body... */
		if(arr[position].dapandung == 3) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.style.display = "block";
				alertContent.innerText = "You Win";
				//progressbar.setAttribute("value", "100");
			}
			else {
				clearInterval(run);
				progressbar.setAttribute("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.style.display = "block";
			alertContent.innerText = "You Lose";
			//progressbar.setAttribute("value", "100");
		}
	});	
	buttonD.addEventListener("click", function () {
		/* body... */
		if(arr[position].dapandung == 4) {
			count++;
			if(count > 40) {				
				clearInterval(run);
				alertDialog.style.display = "block";
				alertContent.innerText = "You Win";
				//progressbar.setAttribute("value", "100");
			}
			else {
				clearInterval(run);
				progressbar.setAttribute("value", "100");
				position = Math.floor((Math.random() * 40) + 1);;
				changeQuestion();
				move();
			}
		} else {
			clearInterval(run);
			alertDialog.style.display = "block";
			alertContent.innerText = "You Lose";
			//progressbar.setAttribute("value", "100");
		}
	});
	btnOK.addEventListener("click", function () {
		/* body... */
		alertDialog.style.display = "none";
		init();
	});

}
check();
