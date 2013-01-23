$(function () {
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  $('#name').html(content.name);
  $('#time').html(content.time)
  BL.previewReady();
});