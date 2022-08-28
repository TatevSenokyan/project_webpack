

function render (data) {
   const archivedContainer = document.querySelector('.archived');

   data.forEach(function(item) {
      const div = document.createElement('div');
      div.className = 'item';
      const img = document.createElement('div');
      img.style.backgroundImage = `url(../../images/vapester.png)`
      div.append(img);
      archivedContainer.append(div);
   });

   return archivedContainer;

}

export default render;
