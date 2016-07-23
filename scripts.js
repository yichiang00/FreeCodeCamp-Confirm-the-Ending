function confirmEnding(str, target) {
var result=false;
var strLength=str.length;
var targetLength=target.length;
var endLetter=str.substr(strLength-targetLength,strLength-1)
console.log(strLength);
console.log(targetLength);
console.log(endLetter);
if(endLetter===target)
{
  result=true;
}
  return result;
}

confirmEnding("Bastian", "n");
