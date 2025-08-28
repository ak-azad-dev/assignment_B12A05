// Function to click heart icon
handleClickHeartIcon = () => {
  const lifeElement = document.getElementById("lifeValue");
  let totalLife = parseInt(lifeElement.innerText);
  totalLife += 1;
  lifeElement.innerText = totalLife;
};

// Function to click call button
handleClickCallButton = (button) => {
  const card = button.closest(".card");

  const serviceBn = card.querySelector("#serviceNameBn").innerText;
  const serviceEn = card.querySelector("#serviceNameEn").innerText;
  const number = card.querySelector("#emergencyNumber").innerText;

  const coinElement = document.getElementById("coinValue");
  let totalCoin = parseInt(coinElement.innerText);

  // Check condition: if totalCoin less then 20
  if (totalCoin < 20) {
    alert(
      "❌ কল করার জন্য আপনার যথেষ্ট কয়েন নেই। কল করতে হলে আপনার ২০টি কয়েন প্রয়োজন।"
    );
    return;
  }

  // Reduce 20 coins on each call
  totalCoin -= 20;
  coinElement.innerText = totalCoin;

  // Save original button styles
  const originalBgColor = button.style.backgroundColor;
  const originalTextColor = button.style.color;

  // Set new button styles on call
  button.style.backgroundColor = "#5c5c5c";
  button.style.color = "#111111";

  // Add delay alert to apply new style
  setTimeout(() => {
    alert("📞 Calling " + serviceEn + "  " + number + "...");

    // Restore button styles after alert is dismissed
    button.style.backgroundColor = originalBgColor || "#00a63e";
    button.style.color = originalTextColor || "#FFFFFF";

    // Add call history container
    const callHistoryContainer = document.getElementById(
      "callHistoryContainer"
    );
    const callHistoryItem = document.createElement("div");
    callHistoryItem.classList.add(
      "bg-[#FAFAFA]",
      "rounded-[8px]",
      "p-4",
      "mb-4",
      "flex",
      "items-center",
      "justify-between",
      "shadow-md",
      "mt-2"
    );

    const currentTime = new Date().toLocaleTimeString();
    callHistoryItem.innerHTML = `
      <div class="flex-col items-center">
        <div class="text-[#111111] font-normal text-[18px]">${serviceBn}</div>
        <div class="mt-1 text-[#5c5c5c] font-normal text-[18px]">${number}</div>
      </div>
      <div class="text-[#111111] font-normal text-[18px]">${currentTime}</div>
    `;
    callHistoryContainer.prepend(callHistoryItem);
  }, 50);
};
