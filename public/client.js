/* jshint jquery:true */
  
$(function() {
  $.get('/blocks', appendToList)

  function appendToList(blocks) {
    var list = blocks.map(wrapElements)
    $('.block-list').append(list)
  }

  function wrapElements(text) {
    return $('<li>').text(text)
  }
})

