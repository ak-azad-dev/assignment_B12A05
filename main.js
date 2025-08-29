// Function to handle heart icon click
function handleClickHeartIcon(button) {
  const card = button.closest(".card");
  const heartIconElement = card.querySelector("#heartIcon");

  // Chnage icon color
  heartIconElement.classList.toggle("text-red-500");

  const lifeElement = document.getElementById("lifeValue");
  let totalLife = parseInt(lifeElement.innerText);
  totalLife += 1;
  lifeElement.innerText = totalLife;
}

// Function to handle call button click
function handleClickCallButton(button) {
  const card = button.closest(".card");
  const serviceBn = card.querySelector("#serviceNameBn").innerText;
  const serviceEn = card.querySelector("#serviceNameEn").innerText;
  const number = card.querySelector("#emergencyNumber").innerText;

  const coinElement = document.getElementById("coinValue");
  let totalCoin = parseInt(coinElement.innerText);

  // Check condition if totalCoin value less then 20
  if (totalCoin < 20) {
    alert(
      "❌ কল করার জন্য আপনার পর্যাপ্ত কয়েন নেই। কল করতে আপনার কমপক্ষে ২০ টি কয়েন প্রয়োজন।"
    );
    return;
  }

  // Deducted totalCoin value
  totalCoin -= 20;
  coinElement.innerText = totalCoin;

  // Display alert message with service name & number
  alert("📞 Calling " + serviceEn + " : " + number);

  const container = document.getElementById("callHistoryContainer");
  const item = document.createElement("div");
  item.classList.add(
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

  // Get currentTime
  const time = new Date().toLocaleTimeString();

  item.innerHTML = `
      <div class="flex-col items-center">
        <div class="text-[#111111] font-normal text-[16px]">${serviceBn}</div>
        <div class="mt-1 text-[#5c5c5c] font-normal text-[16px]">${number}</div>
      </div>
      <div class="text-[#111111] font-normal text-[16px]">${time}</div>
    `;
  container.append(item);
}

// Function to handle copy button click
function handleClickCopyButton(button) {
  const card = button.closest(".card");
  const number = card.querySelector("#emergencyNumber").innerText;

  navigator.clipboard
    .writeText(number)
    .then(() => {
      alert("✅ নম্বর কপি করা হয়েছে : " + number);

      const copyElement = document.getElementById("copyValue");
      let totalCopy = parseInt(copyElement.innerText);
      totalCopy += 1;
      copyElement.innerText = totalCopy + " Copy";
    })
    .catch((err) => {
      console.error("Copy failed: ", err);
      alert("❌ নম্বর কপি করা যায়নি");
    });
}

// Function to handle clear button click
function handleClickClearButton() {
  const callHistoryElement = document.getElementById("callHistoryContainer");
  callHistoryElement.remove();
}
