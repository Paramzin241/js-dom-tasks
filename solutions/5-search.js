export default (document) => {
  // BEGIN
  const content = document.querySelector('.content');
  
  const titleElement = content.querySelector('h1');
  const title = titleElement.textContent.trim();
  
  const descriptionElement = content.querySelector('.description');
  const description = descriptionElement.textContent.trim();

  const articleBlocks = content.querySelectorAll('.links > div');
  
  const items = Array.from(articleBlocks).map(block => {
    // Внутри каждого блока ищем ссылку с названием статьи
    const titleLink = block.querySelector('h2 a');
    const articleTitle = titleLink.textContent.trim();
    
    const descriptionParagraph = block.querySelector('p');
    const articleDescription = descriptionParagraph.textContent.trim();
    
    return {
      title: articleTitle,
      description: articleDescription
    };
  });
  
  return {
    title: title,
    description: description,
    items: items
  };
  // END
};
