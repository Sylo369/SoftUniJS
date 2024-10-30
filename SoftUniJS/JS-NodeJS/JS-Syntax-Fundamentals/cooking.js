function cook(num, action1, action2, action3, action4, action5) 
{
const actions = [];
let action;
let result = parseInt(num);
actions.push(action1, action2, action3, action4, action5);
for (let index = 0; index < actions.length; index++) {
    action = actions[index];
if (action == "chop") {
  result = result / 2;
} else if (action == "dice") {
 result = Math.sqrt(result);
} else if (action == "spice") {
  result += 1;
} else if (action == "bake") {
  result = result * 3;
} else if (action == "fillet") {
  result = result - result * 0.2;
}
console.log(result);
}
}


cook("9", "dice", "spice", "chop", "bake", "fillet");

