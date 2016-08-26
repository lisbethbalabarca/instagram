function instagramFeed() {
	var responseObj = new Object();
	var userId = 1469619500;
	var accessToken = '1469619500.1677ed0.1a941ca704324ab7b55e75149df5688f';
	$.ajax({
		type: 'GET',
		url: 'https://api.instagram.com/v1/users/' + userId + '/media/recent/?access_token=' + accessToken+'&count=10',
		dataType: 'jsonp',
		success: function(response) {
			var responseObj = response;
			console.log(responseObj);
			
			$.each(response.data, function(i, val) {
				var imgSrc = response.data[i].images.thumbnail.url;
				var imgLink = response.data[i].link;
				var imgLikes = response.data[i].likes.count;
				var output = '<a class="instagram-link" href="'+imgLink+'" target="_blank"><img class="instagram-img" src="'+imgSrc+'" /></a>'
				$('.instagram-wrapper').append(output);
			});

		}
	});
}

$(window).on('load', instagramFeed);