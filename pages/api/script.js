
document.getElementById("generate-storyline").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const outputBox = document.getElementById("output");

  if (!prompt.trim()) {
    outputBox.innerHTML = "<pre>Error: Please enter a prompt before submitting.</pre>";
    return;
  }

  const response = await fetch("/api/storyline", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const result = await response.text();
    outputBox.innerHTML = "<pre>" + result + "</pre>";
  } else {
    const errorText = await response.text();
    outputBox.innerHTML = "<pre>Error: " + errorText + "</pre>";
  }
});

document.getElementById("generate-summary").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const outputBox = document.getElementById("output");

  if (!prompt.trim()) {
    outputBox.innerHTML = "<pre>Error: Please enter a prompt before submitting.</pre>";
    return;
  }

  const response = await fetch("/api/summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const result = await response.text();
    outputBox.innerHTML = "<pre>" + result + "</pre>";
  } else {
    const errorText = await response.text();
    outputBox.innerHTML = "<pre>Error: " + errorText + "</pre>";
  }
});

document.getElementById("generate-script").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const outputBox = document.getElementById("output");

  if (!prompt.trim()) {
    outputBox.innerHTML = "<pre>Error: Please enter a prompt before submitting.</pre>";
    return;
  }

  const response = await fetch("/api/script", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const result = await response.text();
    outputBox.innerHTML = "<pre>" + result + "</pre>";
  } else {
    const errorText = await response.text();
    outputBox.innerHTML = "<pre>Error: " + errorText + "</pre>";
  }
});

document.getElementById("generate-storyboard").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;
  const outputBox = document.getElementById("output");

  if (!prompt.trim()) {
    outputBox.innerHTML = "<pre>Error: Please enter a prompt before submitting.</pre>";
    return;
  }

  const response = await fetch("/api/storyboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    outputBox.innerHTML = '<img src="' + imgUrl + '" style="max-width:100%;">';
  } else {
    const errorText = await response.text();
    outputBox.innerHTML = "<pre>Error: " + errorText + "</pre>";
  }
});
