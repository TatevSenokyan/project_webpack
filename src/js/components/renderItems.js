

function render (data) {
   const archivedContainer = document.querySelector('.archived');

   data.forEach(function(item) {
      const div = document.createElement('div');
      div.className = 'item';
      const img = document.createElement('div');
      img.className = item.img;
      const title = document.createElement('div');
      title.innerHTML = item.title;
      title.className = 'itemTitle';
      const count = document.createElement('div');
      count.innerHTML = item.count;
      count.className = 'itemCount'

      div.append(img);
      div.append(title);
      div.append(count);
      archivedContainer.append(div);
   });

   return archivedContainer;

}

export default render;
