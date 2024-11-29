// using  nested loop

function formatPhoneNumber(input) {
  let newnum = "";
  let part1 = "";
  let part2 = "";
  let part3 = "";
  for (let i = 0; i < input.length; i++) {
    if (i < 3) {
      part1 += input[i];
    } else if (i >= 3 && i < 6) {
      part2 += input[i];
    } else if (i >= 6 && i < 10) {
      part3 += input[i];
    }
  }
  console.log(`${"("}${part1}${")"}${part2}${"-"}${part3}`);
}
function handleInput(phoneNumber) {
  const formatted = formatPhoneNumber(phoneNumber);
  console.log("Formatted Phone Number:", formatted);
}
handleInput("1234567890");
handleInput("123");
handleInput("1234");
handleInput("1234567");

// using regex macthings

function formatPhoneNumber(input) {
  const cleaned = input.replace(/\D/g, "");

  // Format the number as (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (!match) return input;

  const part1 = match[1] ? `(${match[1]}` : "";
  const part2 = match[2] ? `) ${match[2]}` : "";
  const part3 = match[3] ? `-${match[3]}` : "";

  return `${part1}${part2}${part3}`.trim();
}

function handleInput(phoneNumber) {
  const formatted = formatPhoneNumber(phoneNumber);
  console.log("Formatted Phone Number:", formatted);
}

handleInput("1234567890"); // (123) 456-7890
handleInput("123"); // (123
handleInput("1234"); // (123) 4
handleInput("1234567"); // (123) 456-7
