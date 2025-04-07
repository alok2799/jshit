const Marvel_heros = ["iron man", "thor", "captain america"]
const dc_heros = ["superman", "batman", "flash"]

const allnewheros = [...Marvel_heros,  ...dc_heros]
console.log(allnewheros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]]
const newanotherarray = [another_array.flat (Infinity)]

console.log(newanotherarray);
