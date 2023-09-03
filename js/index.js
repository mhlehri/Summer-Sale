const couponCodeBtn = document.getElementById("applyBtn");
const cartItemField = document.getElementById("orderedListOfItem");
const items = document.getElementsByClassName("cardContainer");
for (const item of items) {
  const element = item.childNodes;
  for (const card of element) {
    card.addEventListener("click", function () {
      itemElement = card.childNodes[3].childNodes[3];
      productName = itemElement.innerText;
      priceElement = card.childNodes[3].childNodes[5].childNodes[1];
      priceString = priceElement.innerText;
      const p = document.createElement("p");
      const countDown = cartItemField.childElementCount;
      p.classList.add("text-format");
      p.innerHTML = `${countDown + 1}. ${productName}`;
      cartItemField.appendChild(p);
      let AmountTotal = stringToNumber("totalAmount");
      price = parseFloat(priceString);
      AmountTotal += price;
      document.getElementById("totalAmount").innerText = AmountTotal.toFixed(2);
      let total = stringToNumber("total");
      document.getElementById("total").innerText = AmountTotal.toFixed(2);
      if (AmountTotal > 0) {
        const purchaseBtn = document.getElementById("makePurchase");
        purchaseBtn.removeAttribute("disabled");
      }
      couponCodeBtn.addEventListener("click", function () {
        const inputString = document.getElementById("couponInputValue").value;
        if (inputString === "SELL200") {
          discountPrices = (AmountTotal * 20) / 100;
          document.getElementById("discount").innerText =
            discountPrices.toFixed(2);
          let discount = stringToNumber("discount");
          total = AmountTotal - discount;
          document.getElementById("total").innerText = total.toFixed(2);
        }
      });
      if (AmountTotal >= 200) {
        couponCodeBtn.removeAttribute("disabled");
      } else {
        couponCodeBtn.setAttribute("disabled", true);
      }
    });
  }
}
function stringToNumber(elementField) {
  const elements = document.getElementById(elementField);
  const elementStringValue = elements.innerText;
  const elementInNumber = parseFloat(elementStringValue);
  return elementInNumber;
}
