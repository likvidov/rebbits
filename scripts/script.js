let blocksParent = document.querySelector('.square-body');
let blocks = document.querySelectorAll('.block');
const resetBtn = document.querySelector('.btn-reset');

const render = () => {
  blocksParent.innerHTML = "";
  blocks.forEach(block => {
    blocksParent.append(block)
  })
}

const reset = () => {
  blocksParent.innerHTML = "";
  Array.from(blocks).sort((a, b) => {
    return a.querySelector('.block-number').textContent - b.querySelector('.block-number').textContent
  }).forEach(block => {
    blocksParent.append(block)
  })
  blocks = document.querySelectorAll('.block')
}

const swap = (arr, a, b) => {
  arr[a] = arr.splice(b, 1, arr[a])[0];
  return arr
}

resetBtn.addEventListener('click', reset);
blocksParent.addEventListener('click', (e) => {
  if (e.target.closest('.left')) {
    let selectedBlock = e.target.closest('.block');
    let index = Array.from(blocks).indexOf(selectedBlock);
    if (index > 0) {
      blocks = swap(Array.from(blocks), index - 1, index);
      render();
    }
  } else if (e.target.closest('.right')) {
    let selectedBlock = e.target.closest('.block');
    let index = Array.from(blocks).indexOf(selectedBlock);
    if (index < 24) {
      blocks = swap(Array.from(blocks), index + 1, index);
      render();
    }
  } else if (e.target.closest('.top')) {
    let selectedBlock = e.target.closest('.block');
    let index = Array.from(blocks).indexOf(selectedBlock);
    if (index - 5 >= 0) {
      blocks = swap(Array.from(blocks), index - 5, index);
      render();
    }
  } else if (e.target.closest('.bottom')) {
    let selectedBlock = e.target.closest('.block');
    let index = Array.from(blocks).indexOf(selectedBlock);
    if (index + 5 <= 24) {
      blocks = swap(Array.from(blocks), index + 5, index);
      render();
    }
  }
})