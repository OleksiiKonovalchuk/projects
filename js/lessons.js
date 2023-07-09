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
function addBinary(a, b) {
	let number = a + b;
	let binary = "";
	// const binary = [];
	while (number !== 0) {
		if (number % 2) {
			// binary.push(1);
			binary = 1 + binary;
			number = Math.floor(number / 2);
		} else {
			// binary.push(0);
			binary = 0 + binary;
			number = number / 2;
		}
	}
	return binary;
}
// function addBinary(a, b) {
// 	return (a + b).toString(16);
// }
console.log(addBinary(1, 2)); // 11
console.log(addBinary(100, 0)); // 1100100
console.log(addBinary(281328809153791, 241990690575849)); //111011
console.log(addBinary(51, 12)); // 111111
