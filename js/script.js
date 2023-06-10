// let arr = [1, 2, 3]
$("#rock").click(function() {
	$(".status").text("???")
	$(".q").attr("src", "img/q.png")
	let turn = Math.floor(Math.random() * (4 - 1) + 1)

	switch(turn){
		case 1:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/rock.png")
				$(".status").text("Draw")
			})
			break;
		case 2:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/paper.png")
				$(".status").text("You lost!")
			})
			break;
		case 3:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/scissors.png")
				$(".status").text("You won!")
			})
			break;
	}
})
$("#paper").click(function() {
	$(".status").text("???")
	$(".q").attr("src", "img/q.png")
	let turn = Math.floor(Math.random() * (4 - 1) + 1)

	switch(turn){
		case 1:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/rock.png")
				$(".status").text("You won!")
			})
			break;
		case 2:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/paper.png")
				$(".status").text("Draw")
			})
			break;
		case 3:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/scissors.png")
				$(".status").text("You lost!")
			})
			break;
	}
})
$("#scissors").click(function() {
	$(".status").text("???")
	$(".q").attr("src", "img/q.png")
	let turn = Math.floor(Math.random() * (4 - 1) + 1)

	switch(turn){
		case 1:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/rock.png")
				$(".status").text("You lost!")
			})
			break;
		case 2:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/paper.png")
				$(".status").text("You won!")
			})
			break;
		case 3:
			$(".q").effect("shake", {}, 1000, function() {
				$(".q").attr("src", "img/scissors.png")
				$(".status").text("Draw")
			})
			break;
	}
})