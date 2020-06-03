
$(document).ready(function(){

$('#block_0')
.delay(1500)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_5')
.delay(1900)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_3')
.delay(2300)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_7')
.delay(2700)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_2')
.delay(3100)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_8')
.delay(3500)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_1')
.delay(3900)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_4')
.delay(4300)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_6')
.delay(4700)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('.center')
.delay(5100)
.queue(function (next) {
$(this).css('display', 'inline');
next();
});


});
