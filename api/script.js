
async function generateStoryline() {
  const prompt = document.getElementById("prompt").value;
  const res = await fetch('/api/storyline', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  const data = await res.text();
  document.getElementById("output").innerText = "Storyline: " + data;
}

async function generateSummary() {
  const prompt = document.getElementById("prompt").value;
  const res = await fetch('/api/summary', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  const data = await res.text();
  document.getElementById("output").innerText += "\n\nSummary: " + data;
}

async function generateScript() {
  const prompt = document.getElementById("prompt").value;
  const res = await fetch('/api/script', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  const data = await res.text();
  document.getElementById("output").innerText += "\n\nScript: " + data;
}

async function generateStoryboard() {
  const prompt = document.getElementById("prompt").value;
  const res = await fetch('/api/storyboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  const data = await res.text();
  document.getElementById("output").innerText += "\n\nStoryboard: " + data;
}
