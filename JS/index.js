
$(document).ready(function(){

$('#block_0')
.delay(1100)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_5')
.delay(1600)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_3')
.delay(2100)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_7')
.delay(2600)
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
.delay(3600)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_1')
.delay(4100)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_4')
.delay(4600)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#block_6')
.delay(5100)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('.center')
.delay(5600)
.queue(function (next) {
$(this).css('display', 'inline');
next();
});

$('#startDiv')
.delay(5600)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

$('#start')
.delay(5600)
.queue(function (next) {
$(this).css('visibility', 'visible');
next();
});

});
