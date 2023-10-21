
const parent = document.querySelector('#root')

const btnChild = parent.children;
HTMLCollection.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

btnChild.myForEach((elem) => {
  elem.style.background = 'red';

  elem.onclick = () => {
    for (let elem1 of btnChild) {
      elem1.style.background = 'red'
    }
    elem.style.background = 'black';
  }

})

console.log(btnChild);

// ++++++++++++++++++++++++++++++++++++++++++++++
// method map 


HTMLCollection.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));

  }

  return {
    result

  };
};
const res = btnChild.myMap(elem => {
  // elem.innerText = 'hello'
  console.log(elem);

})

const array1 = [1, 2, 3, 4];

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// reduce


HTMLCollection.prototype.myReduce = function (callback, initialValue) {
  let i = 0;

  if (!initialValue) {
    initialValue = this[0];
    i = 1;
  }

  for (; i < this.length; i++) {
    initialValue = callback(initialValue, this[i].value, i, this);
  }

  return initialValue;
};

const btns = btnChild.myReduce((acc, carr) => {
  return acc + carr

}, 0);

console.log(btns)


// +++++++++++++++++++++++++++++++

// method filter

// const array = [12,3,4,6,7,8,9,1,2,3]

// HTMLCollection.prototype.myFilter = function(callback){
// const newArr = []
// for(let i = 0;i < this.length;i++){
// if(callback(this[i],i,this))
// newArr.push(this[i])
// }
// return newArr 
// }
// const newFilter = array.myFilter((elem) => elem % 2 === 0 )


// console.log(newFilter);











