window.addEventListener("DOMContentLoaded", function () 
{
  const type = document.getElementById("type");
  const num = document.getElementById("num");
  const radios = document.getElementById("radios");
  const check = document.getElementById("checkbox");
  radios.style.display = "none";
  check.style.display = "none";
  num.addEventListener("input", function () 
  {
    if (Number.isNaN(Number(num.value))) 
    {
      alert("Ошибка при введении данных");
      return;
    }
    let t = type.value;
    switch (t) 
    {
      case "1":
        countPrice(1);
        break;

      case "2":
        countPrice(2);
        break;

      case "3":
        countPrice(3);
        break;
    }
  });

  type.addEventListener("change", function () 
  {
    switch (type.value) 
    {
      case "1":
        radios.style.display = "none";
        check.style.display = "none";
        countPrice(1);
        break;

      case "2":
        radios.style.display = "block";
        check.style.display = "none";
        countPrice(2);
        break;

      case "3":
        radios.style.display = "none";
        check.style.display = "block";
        countPrice(3);
        break;
    }
  });
});

function countPrice(option) 
{
  const count = Number(document.getElementById("num").value);
  const multiplier = 10;
  const total = document.getElementById("total");
  let r = document.querySelectorAll("#radios input[type=radio]");
  let c = document.getElementById("checkbox-check");
  let res = multiplier * count;

  switch (option)
  {
    case 1:
      total.value = res;
      break;

    case 2:
      r.forEach(function (p) 
      {
        p.addEventListener("change", function () 
        {
          res = multiplier * count + Number(p.value);
          total.value = res;
        });
        total.value = res;
      });
      break;

    case 3:
      c.addEventListener("change", function () 
      {
        if (c.checked) 
        {
          res = multiplier * count + Number(c.value);
          total.value = res;
        }
         else 
        {
          res = multiplier * count;
          total.value = res;
        }
      });
      total.value = res;
      break;
  }
}