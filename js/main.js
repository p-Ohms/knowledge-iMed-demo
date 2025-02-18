function searchFunction() {
  // Get the input value
  let input = document.getElementById('searchInput').value.toLowerCase();
  
  // Get all elements to be searched
  let items = document.getElementsByClassName('searchableItem');
  
  // Loop through all items and hide those that don't match the search query
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.innerHTML.toLowerCase().indexOf(input) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
}