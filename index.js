const salary = 500;

const contributions = salary * 0.05;

const taxableAmount = salary - contributions;

const taxOver450 = (taxableAmount - 450) * 0.10;
const taxOver250 = Math.min(450 - 250, taxableAmount - 250) * 0.08;
const taxOver80 = Math.min(250 - 80, taxableAmount - 80) * 0.04;

const taxUnder80 = 0;

const totalTaxes =
  Math.max(0, taxOver450)
  + Math.max(0, taxOver250)
  + Math.max(0, taxOver80)
  + Math.max(0, taxUnder80);

const finalResult = taxableAmount - totalTaxes;

console.log(
  `On a monthly wage of ${salary} EUR a Kosovian would contribute ${contributions} EUR towards their pension, pay a total of ${totalTaxes} EUR of tax and receive a net of ${finalResult} EUR`
)