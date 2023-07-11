// const list = document.querySelector(".list");
// const range = document.querySelector(".range");
// const string =
// 	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt perferendis laboriosam nam quis vero vel voluptates voluptate, maxime quaerat hic repellat molestias obcaecati fuga quo quasi explicabo natus deleniti incidunt mollitia? Delectus magni tenetur quidem autem voluptate fugit nihil deserunt adipisci molestiae, in, ut voluptates cupiditate dolore incidunt rerum error. Aut in aspernatur modi? Unde exercitationem quis dolorum veniam laborum, quidem voluptatibus laboriosam nesciunt animi dignissimos a dolores laudantium nam repudiandae culpa distinctio perspiciatis voluptatem quia dicta vel pariatur ad placeat? Quis nobis nihil laborum vel consequuntur! Quos mollitia, dicta dolores voluptatum laboriosam adipisci nulla tenetur nihil recusandae sed consequatur porro nobis veniam provident temporibus corporis repudiandae delectus, labore, quo omnis aperiam doloremque. Culpa molestias incidunt iure nesciunt harum officiis eum, saepe deleniti facere qui quia voluptates doloribus voluptatem et suscipit perspiciatis maxime mollitia ea accusantium maiores eaque alias. Nisi in explicabo esse, totam voluptatum, nobis iste harum aperiam dolores quae aut quis repellendus. Minus, deserunt earum cumque iste repellendus, iure modi exercitationem inventore expedita officiis harum sequi recusandae dolore. Quia libero facilis ex aut blanditiis, commodi cum aspernatur amet repellendus ratione fuga culpa ab nihil nobis rem. Ullam excepturi eaque tempore ducimus fugiat laboriosam officiis impedit rerum adipisci laudantium autem, aliquam cum neque minus! Asperiores molestias illo soluta ducimus! Saepe, repellat deserunt inventore, voluptatibus voluptatem nemo quisquam nesciunt officia suscipit a libero voluptates dicta placeat beatae natus aut. Nemo ab quaerat nobis! Quidem cupiditate necessitatibus consectetur excepturi mollitia deleniti harum, quisquam delectus, rerum enim maxime. Illum ex incidunt praesentium earum cum, sit consectetur odit, quae totam impedit hic numquam nostrum aliquid ea magnam ut eos quibusdam aspernatur sed, obcaecati omnis quisquam modi sapiente? Optio ea sed, omnis natus placeat architecto fuga. Ab exercitationem similique repellendus veritatis eaque maiores quis nihil excepturi autem officiis voluptate sunt, error repudiandae laudantium reprehenderit.";
// const snippet = document.querySelector(".snippet");
// const fn = function (word) {
// 	const str = snippet.textContent;
// 	const result = str.replaceAll(word, `<span class='redWord'>${word}</span>`);
// 	return result;
// };
// range.addEventListener("input", e => {
// 	snippet.innerHTML = fn(e.currentTarget.value);
// });
// const func = str => {
// 	const neWstr = str.replace("Sqrt", "Math.sqrt").replace("Pow", "Math.pow");

// 	return neWstr.split(" ");
// };
// console.log(func("(((1 + 2) * 4)/ Sqrt( Pow(5,9))) - 3"));
// function consecutiveOnes(nums) {
// 	const check = nums.join("").split(0);
// 	console.log(check);
// 	if (!check) return 0;
// 	let max = 0;

// 	for (const arr of check) {
// 		if (arr.length > max) {
// 			max = arr.length;
// 		}
// 	}
// 	return max;
// }
// function consecutiveOnes(nums) {
// 	if (!nums.includes(1)) return 0;
// 	const check = nums
// 		.join("")
// 		.split(0)
// 		.sort((a, b) => b - a);

// 		const max = Math.max(...check)

// 	return check[0].length;
// 	// return `${check}`.length;
// 	  return check.reduce((acc,item)=>{if(item.length > acc) {return acc = item.length} return acc},0)
// }
// function consecutiveOnes(nums) {
// 	if (!nums.includes(1)) return 0;
// 	let max = 0;
// 	let sum = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === 1) {
// 			sum++;
// 		}
// 		if (nums[i] === 0) {
// 			if (max < sum) {
// 				max = sum;
// 			}
// 			sum = 0;
// 		}
// 	}
// 	return max ? max : sum;
// }
// console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0])); //, 3);
// console.log(consecutiveOnes([1, 1, 0, 0, 1])); //, 2);
// console.log(consecutiveOnes([1, 1, 1, 1, 1])); //, 5);
// console.log(consecutiveOnes([0, 0, 0, 0, 0])); //, 0);
// console.log(consecutiveOnes([0, 0, 0, 0, 1])); //, 1);
// function longestConsec(strarr, k) {
// 	if (!strarr.length || k > strarr.length || k <= 0) return "";
// 	const arr = [];
// 	for (let i = 0; i < strarr.length; i++) {
// 		let stringIs = strarr[i];
// 		for (let j = 1; j < k; j++) {
// 			if (strarr.length <= i + j) break;
// 			stringIs = stringIs + strarr[i + j];
// 		}
// 		arr.push(stringIs);
// 	}
// 	return arr.sort((a, b) => b.length - a.length)[0];
// }
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); //  2), "abigailtheta");
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); // 1),"oocccffuucccjjjkkkjyyyeehh",

// console.log(longestConsec([], 3)); // "");
// console.log(
// 	longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2),
// ); //, 2),"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck",

// console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)); // 2),"wlwsasphmxxowiaxujylentrklctozmymu",

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)); //, -2), "");
// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //, 3), "ixoyx3452zzzzzzzzzzzz");
// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)); //, 15), "");
// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //, 0), "");
// function duplicateEncode(word) {
// 	return word
// 		.toLowerCase()
// 		.split("")
// 		.map((item, index, arr) => {
// 			if (index !== arr.lastIndexOf(item) || index !== arr.indexOf(item)) {
// 				return ")";
// 			} else return "(";
// 		})
// 		.join("");
// }

// console.log(duplicateEncode("din")); //, "(((");
// console.log(duplicateEncode("recede")); //, "()()()");
// console.log(duplicateEncode("Success")); //, ")())())", "should ignore case");
// console.log(duplicateEncode("(( @")); //, "))((");
// function sumTwoSmallestNumbers(numbers) {
// 	const sorted = numbers.sort((a, b) => a - b);
// 	return sorted[0] + sorted[1];
// }
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// function fakeBin(x) {
// 	return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
// }
// console.log(fakeBin("45385593107843568")); //, "01011110001100111"));
// function addBinary(a, b) {
// 	let number = a + b;
// 	let binary = "";
// 	// const binary = [];
// 	while (number !== 0) {
// 		if (number % 2) {
// 			// binary.push(1);
// 			binary = 1 + binary;
// 			number = Math.floor(number / 2);
// 		} else {
// 			// binary.push(0);
// 			binary = 0 + binary;
// 			number = number / 2;
// 		}
// 	}
// 	return binary;
// }
// // function addBinary(a, b) {
// // 	return (a + b).toString(16);
// // }
// console.log(addBinary(1, 2)); // 11
// console.log(addBinary(100, 0)); // 1100100
// console.log(addBinary(281328809153791, 241990690575849)); //111011
// console.log(addBinary(51, 12)); // 111111
// function code(strng) {
// 	return strng
// 		.split("")
// 		.map(item => {
// 			const binary = Number(item).toString(2);
// 			const toConcat =
// 				binary.length === 1
// 					? "1"
// 					: binary.length === 2
// 					? "01"
// 					: binary.length === 3
// 					? "001"
// 					: binary.length === 4
// 					? "0001"
// 					: binary.length === 5
// 					? "00001"
// 					: "000001";
// 			return toConcat.concat(binary);
// 		})
// 		.join("");
// }
// function decode(str) {
// 	let decoded = "";
// 	let whatLeft = String(str);
// 	while (whatLeft.length) {
// 		if (whatLeft.startsWith("10")) {
// 			decoded += "0";
// 			whatLeft = whatLeft.slice(2);
// 		} else if (whatLeft.startsWith("11")) {
// 			decoded += "1";
// 			whatLeft = whatLeft.slice(2);
// 		} else if (whatLeft.startsWith("01")) {
// 			decoded += parseInt(whatLeft.slice(2, 4), 2);
// 			whatLeft = whatLeft.slice(4);
// 		} else if (whatLeft.startsWith("001")) {
// 			decoded += parseInt(whatLeft.slice(3, 6), 2);
// 			whatLeft = whatLeft.slice(6);
// 		} else if (whatLeft.startsWith("0001")) {
// 			decoded += parseInt(whatLeft.slice(4, 8), 2);
// 			whatLeft = whatLeft.slice(8);
// 		} else if (whatLeft.startsWith("00001")) {
// 			decoded += parseInt(whatLeft.slice(5, 10), 2);
// 			whatLeft = whatLeft.slice(10);
// 		}
// 	}
// 	return decoded;
// }
// console.log(code("9"));
// console.log(code("62")); //, "0011100110")
// console.log(code("55337700")); //, "001101001101011101110011110011111010")
// console.log(code("1119441933000055")); //, "1111110001100100110000110011000110010111011110101010001101001101")
// console.log(code("69")); //, "00111000011001")
// console.log(code("86")); //, "00011000001110")
// console.log(code("77338855")); //) --> "001111001111011101110001100000011000001101001101"
// console.log(code("77338")); //-->// "0011110011110111011100011000"
// console.log(code("0011121314")); //-->// "1010111111011011011111001100"
// console.log(code("1119441933000055"));
// console.log(decode("1111110001100100110000110011000110010111011110101010001101001101"));
// console.log("HALF");
// console.log(decode("10001111")); //, "07")
// console.log(
// 	decode("001100001100001100001110001110001110011101110111001110001110001110001111001111001111001100001100001100"),
// ); //, "444666333666777444")
// console.log(decode("01110111110001100100011000000110000011110011110111011100110000110001100110")); //, "33198877334422")
// console.log(
// 	decode(
// 		"0011010011010011011010101111110011000011000011000011100011100011100011100011100011100001100100011001000110011100011001001111001111001111001111001111001111",
// 	),
// ); //, "55500011144466666699919777777")
// console.log(
// 	decode(
// 		"01110111011111000110010011110011110011110011110011110011110111011101110110011001100110011001101111111010101100011001000110000001100000011000",
// 	),
// ); //, "3331977777733322222211100019888")

// console.log(decode("001111001111011101110001100000011000001101001101")); //-> "77338855"
// console.log(decode("0011110011110111011100011000")); //-> "77338"
// console.log(decode("1010111111011011011111001100")); //) -> "0011121314"
// console.log(decode("11111100110010011000011001100110010111011110101010001101001101"));
