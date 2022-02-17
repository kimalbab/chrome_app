const quotes = [
    {
        quote: "내 너 그럴 줄 알았다? 알았으면 제발 미리 말 해줘라.",
        author: "Myung Su, Park",
    },
    {
        quote: "결혼과 죽음은 끝까지 미뤄라.",
        author: "Myung Su, Park",
    },
    {
        quote: "늦었다고 생각할 때가 진짜 너무 늦었다.",
        author: "Myung Su, Park",
    },
    {
        quote: "선배는 입 닫고 지갑을 열어라.",
        author: "Myung Su, Park",
    },
    {
        quote: "젊어서 그럴 수도 있지 뭐!",
        author: "Myung Su, Park",
    },
    {
        quote: "누구 하나 날 무시할 수 없어.",
        author: "Myung Su, Park",
    },
    {
        quote: "힘 있는 자만이 살아남지.",
        author: "Myung Su, Park",
    },
    {
        quote: "살아 숨 쉴때 열심히 해야죠.",
        author: "Myung Su, Park",
    },
    {
        quote: "당사자가 기분이 나쁘다는데 왜 본인들이 판단합니까?",
        author: "Myung Su, Park",
    },
    {
        quote: "조금만 돈 더 벌고 뜬다 이 바닥.",
        author: "Myung Su, Park",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;