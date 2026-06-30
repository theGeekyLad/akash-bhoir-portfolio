const list = document.querySelector("#recommendation-list");

function recommendationCard(recommendation) {
  const article = document.createElement("article");
  article.className = "quote-card";

  const quote = document.createElement("blockquote");
  quote.textContent = recommendation.quote;

  const footer = document.createElement("footer");
  const attribution = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = recommendation.name;

  const title = document.createElement("p");
  title.textContent = `${recommendation.role}, ${recommendation.company}`;

  attribution.append(name, title);

  const detail = document.createElement("p");
  detail.textContent = recommendation.relationship;

  footer.append(attribution, detail);
  article.append(quote, footer);
  return article;
}

if (list && Array.isArray(window.recommendations)) {
  window.recommendations.forEach((recommendation) => {
    list.appendChild(recommendationCard(recommendation));
  });
}
