let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let input = event.target.elements.input.value;
  let output = event.target.elements.output;

   console.log(input)
   console.log(output)

  output.textContent = input.toUpperCase();
});
