const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, alertEach) {
      const newCol = (col instanceof Array) ? col.slice() : Object.values(col)
      for(let i = 0; i < newCol.length; i++) {
        alertEach(newCol[i])
      }
      return col
    },

    map: function(collection, callback) {
      
        
        let newArr = [];
        for(let i = 0; i < collection.length; i++) {
          newArr.push(callback(collection[i]))
        }
       return newArr
    },

    reduce: function(col, callback, acc) {
      let collection = col.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;

    },

    find: function(collection, predicate) {
        for(let i =0; i < collection.length; i++) {
          if (predicate(collection[i])) return collection[i]
        }
        return undefined
    },
    
   filter: function (collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newArr.push(collection[i])

      return newArr
    },

  }
})()

fi.libraryMethod()
