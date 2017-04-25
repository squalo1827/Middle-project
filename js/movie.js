var movie = {
	'THE FELLOWSHIP OF THE RINGS' : {
		0 : "https://www.youtube.com/embed/V75dMMIW2B4?ecver=1",
		1 : "https://www.youtube.com/embed/cKEGZ-CvWHk?ecver=1",
		2 : "https://www.youtube.com/embed/_e8QGuG50ro?ecver=1"
	},
	'THE TWO TOWER' : {
		0 : "https://www.youtube.com/embed/cvCktPUwkW0?ecver=1",
		1 : "https://www.youtube.com/embed/LbfMDwc4azU?ecver=1",
		2 : "https://www.youtube.com/embed/ve5HZfrrUqc?ecver=1"
	},
	'THE RETURN OF THE KING' : {
		0 : "https://www.youtube.com/embed/r5X-hFf6Bwo?ecver=1",
		1 : "https://www.youtube.com/embed/y2rYRu8UW8M?ecver=1",
		2 : "https://www.youtube.com/embed/KOQSQaGgJxs?ecver=1"
	},
	'THE HOBBIT' : {
		0 : "https://www.youtube.com/embed/JTSoD4BBCJc?ecver=1",
		1 : "https://www.youtube.com/embed/ZSzeFFsKEt4?ecver=1",
		2 : "https://www.youtube.com/embed/G0k3kHtyoqc?ecver=1"
	}
}


$(document).ready(function() {
	Update();

	$(".movie-area-right li").click(function() {
		$(".movie-area-left>p").text($(this).find("p").text());
	});

	$(".tab li").click(function() {
		$(".tab").attr("name", $(this).find("a").text().toUpperCase());
		Update();
	});
});

function Update() {	
		$(".movie-area-right li").each(function(index) {
			var tab = $(".tab").attr("name");
			//console.log(movie[tab][index]);
			var src = movie[tab][index];
			$(this).find("a").attr("href", src);
			//var src = $(this).find("a").attr("href");
			var id = src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
			$(this).find("img").attr("src", "http://img.youtube.com/vi/"+id+"/0.jpg");
			$(this).find("p").text(tab + " TRAILER " + (index+1));

			if(index == 0) {
				$("iframe").attr("src", src);
				$(".movie-area-left>p").text(tab + " TRAILER " + (index+1));
			}
			/*console.log(index);
			console.log(tab);
			console.log(movie['Hello World']);*/
		});
	}