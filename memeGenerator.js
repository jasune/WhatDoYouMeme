const form = document.querySelector('form');
const memesContainer = document.querySelector('#memes');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const imageUrl = form.elements['image-url'].value;
  const topText = form.elements['top-text'].value;
  const bottomText = form.elements['bottom-text'].value;

  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');

  const memeImage = document.createElement('img');
  memeImage.src = imageUrl;
  memeDiv.appendChild(memeImage);

  const topTextDiv = document.createElement('div');
  topTextDiv.textContent = topText;
  topTextDiv.classList.add('top-text');
  memeDiv.appendChild(topTextDiv);

  const bottomTextDiv = document.createElement('div');
  bottomTextDiv.textContent = bottomText;
  bottomTextDiv.classList.add('bottom-text');
  memeDiv.appendChild(bottomTextDiv);


  //delete meme button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete Meme';
  deleteButton.addEventListener('click', () => {
    memeDiv.remove();
  });

  memeDiv.appendChild(document.createElement('br'));
  memeDiv.appendChild(deleteButton);

  memesContainer.appendChild(memeDiv);

  form.reset();
});