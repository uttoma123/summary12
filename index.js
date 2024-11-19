function collectMoney(cardMoney) {
    const Money = document.getElementById(cardMoney).innerText;
    const MoneyFloat = parseFloat(Money);
  
    return MoneyFloat;
  }
  let i = 0 ;
  function getCard(card, cardMoney,cardName) {
    document.getElementById(card).addEventListener("click", function () {
      
      const applyButton = document.getElementById("apply-button");
      const addName = document.getElementById("add-name");
      const makePurchase = document.getElementById("make-purchase");
      const cName = document.getElementById(cardName).innerText;
      const cMoney = collectMoney(cardMoney);
      const totalPrice = collectMoney("total-price");
      const mainTotalPrice = cMoney + totalPrice;
      document.getElementById("total-price").innerText =
        mainTotalPrice.toFixed(2);
  
        i++ ;
        const p = document.createElement('p');
        p.innerText = `${i} .  ${cName}`
        addName.appendChild(p);
        const mainPrice = document.getElementById("total-price").innerText;
      if (mainPrice > 0) {
        makePurchase.removeAttribute("disabled");
      }
  
      if (mainPrice >= 200) {
        applyButton.removeAttribute("disabled");
  
        applyButton.addEventListener("click", function () {
          const coupon = document.getElementById("coupon-code");
          const couponValue = coupon.value;
          const discountPrice = document.getElementById("discount-price");
          const inTotalPrice = document.getElementById("intotal-price");
          const mainPrice = document.getElementById("total-price").innerText;
  
          if (couponValue === "SELL200") {
            const discount = (mainPrice * 20) / 100;
            discountPrice.innerText = discount.toFixed(2);
            const InTotal = mainPrice - discount;
            inTotalPrice.innerText = InTotal.toFixed(2);
            coupon.value = "";
            applyButton.setAttribute("disabled", "true");
            return;
          } else {
            coupon.value = "";
          }
        });
      };
  
    });
  }
  const card1 = getCard("card1", "card-money1","card-name1");
  const card2 = getCard("card2", "card-money2","card-name2");
  const card3 = getCard("card3", "card-money3","card-name3");
  const card4 = getCard("card4", "card-money4","card-name4");
  const card5 = getCard("card5", "card-money5","card-name5");
  const card6 = getCard("card6", "card-money6","card-name6");
  const card7 = getCard("card7", "card-money7","card-name7");
  const card8 = getCard("card8", "card-money8","card-name8");
  const card9 = getCard("card9", "card-money9","card-name9");
  
  
  
  document.getElementById("go-home").addEventListener("click", function () {
    const discountPrice = document.getElementById("discount-price");
    const inTotalPrice = document.getElementById("intotal-price");
    const mainPrice = document.getElementById("total-price");
    const makePurchase = document.getElementById("make-purchase");
    const applyButton = document.getElementById("apply-button");
    const addName = document.getElementById("add-name");
  
    discountPrice.innerText = "00.00";
    inTotalPrice.innerText = "00.00";
    mainPrice.innerText = "00.00";
    addName.innerText = "";
    i = 0;
  
    makePurchase.setAttribute("disabled", "true");
    applyButton.setAttribute("disabled", "true");
  });