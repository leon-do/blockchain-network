var data = [ 
	{
		from:'a',
		to: 'b'
	}, 
	{
		from:'a',
		to: 'c'
	}, 
	{
		from:'d',
		to: 'b'
	}, 
	{
		from:'c',
		to: 'd'
	}, 	
]

// stores unique 'from' addresses [{-_-}] ZZZzz zz z...
const unique = {}

// 〜(￣▽￣〜)(〜￣▽￣)〜
const nodeArray = []
const edgeArray = []

// ◔_◔ loop ◔_◔
for (const i in data) {

	// called this because... http://visjs.org/docs/network/.          \ᇂ_ᇂ\
	const id = data[i].from 
	const label = data[i].from
	const from = data[i].from
	const to = data[i].to

	// if id is unique aka ᶠᶸᶜᵏ♥ᵧₒᵤ undefined
	if (unique[id] === undefined){

		// add to unique (╯°□°）╯︵ ┻━┻)
		unique[id] = id

		// add a ☆(◒‿◒)☆ new node 
		nodeArray.push({
			id: id, 
			label: label 
		})

		// add a connection (ㄒoㄒ)
		edgeArray.push({
			from: from, 
			to: to 
		})

	} else {

		// add a connection (≧o≦)
		edgeArray.push({
			from: from, 
			to: to 
		})

	}


}

console.log('nodeArray', nodeArray)
console.log('edgeArray', edgeArray)
/**
edgeArray = [ { from: 'a', to: 'b' },
  { from: 'a', to: 'c' },
  { from: 'd', to: 'b' },
  { from: 'c', to: 'd' } ]



nodeArray = [ { id: 'a', label: 'a' },
  { id: 'd', label: 'd' },
  { id: 'c', label: 'c' } ]
*/





