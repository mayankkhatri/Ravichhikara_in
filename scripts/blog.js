// JavaScript Dictionary for Press Releases
const pressReleases = [
  {
    title:
      "Domestic violence has no gender: Why husbands need legal protection too",
    description:
      "What happens when the law becomes a tool for extortion? Why does the law’s empathy often falter when the victim is a man, leaving them to suffer in silence?... ",
    link: "https://www.newindianexpress.com/web-only/2025/Jan/23/domestic-violence-has-no-gender-why-husbands-need-legal-protection-too",
    date: "24/01/2025",
    timeRead: "5 Min",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FEk6Sm_uqrC0JBZxE49BgUO7xNDYMTLzmQ&s",
  },
  {
    title:
      "How is Bombay High Court’s blanket order a passive killing of dogs?",
    description:
      "Undoubtedly, the population of stray dogs is increasing at a break-neck speed. Every day, one can hear cases of dog bites which indeed is a behaviour to control... ",
    link: "https://timesofindia.indiatimes.com/blogs/ravi-singh-chhikara-opines/how-is-bombay-high-courts-blanket-order-a-passive-killing-of-dogs/",
    date: "11/12/2022",
    timeRead: "15 Min",
    image:
      "https://logos-download.com/wp-content/uploads/2021/01/The_Times_of_India_Logo.png",
  },
  {
    title: "Section 6A of the Citizenship Act — why it fails Assam",
    description:
      "The 4:1 majority ruling by a Constitution Bench of the Supreme Court of India, in October 2024, that upheld the constitutional validity of Section 6A of the Citizenship Act, 1955 is significant...",
    link: "https://www.thehindu.com/opinion/lead/section-6a-of-the-citizenship-act-why-it-fails-assam/article69001502.ece",
    date: "19/12/2022",
    timeRead: "12 Min",
    image: "https://rishihood.edu.in/wp-content/uploads/2021/01/The-Hindu.png",
  },
  {
    title: "Let LGBTQ+ couples adopt",
    description:
      "When Covid-19 hit the country, no one knew how devastating its impact would be on the lives of children. However, as the infections started rising and people started losing...",
    link: "https://indianexpress.com/article/opinion/web-edits/let-lgbtq-couples-adopt-7392100/",
    date: "06/06/2021",
    timeRead: "18 Min",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FEk6Sm_uqrC0JBZxE49BgUO7xNDYMTLzmQ&s",
  },
  {
    title: "The rapid rise of AI and the need for its regulation",
    description:
      "Recently, it has been observed that AI may snatch away millions of jobs in the Indian market. As artificial intelligence (AI) technologies continue to advance, concerns arise regarding their potential implications...",
    link: "https://www.deccanherald.com/opinion/the-rapid-rise-of-ai-and-the-need-for-its-regulation-1239987.html",
    date: "24/07/2023",
    timeRead: "10 Min",
    image:
      "https://exchange4media.gumlet.io/news-photo/1536222564_d9SbIG_deccan-herald_image.jpg",
  },
  {
    title:
      "Does India Need Inspiration From the EU’s Proposed Regulation to Combat CSAM?",
    description:
      "Countries around the world, including India, face increasing pressure to address and control online child sexual abuse. The scope of the problem is broad, involving various forms of exploitation...",
    link: "https://www.thequint.com/news/law/does-india-need-inspiration-from-the-eu-proposed-regulation-to-combat-csam",
    date: "11/11/2024",
    timeRead: "20 Min",
    image:
      "https://i0.wp.com/www.opindia.com/wp-content/uploads/2018/01/quint.jpg?fit=1056%2C526&ssl=1",
  },
  {
    title:
      "The Dilemma Over Interpretation Of Section 102 Of Code Of Criminal Procedure, 1973",
    description:
      "It has been often observed that the ambiguous text of provisions causes abuse and misuse of investigation powers by police officers often leading to harsh ramifications for ostensible innocent parties as well...",
    link: "https://www.livelaw.in/columns/section-102-of-code-of-criminal-procedure-supreme-court-suspicious-bank-transactions-193908",
    date: "11/03/2022",
    timeRead: "17 Min",
    image:
      "https://www.livelaw.in/cms/wp-content/uploads/2013/06/Live-Law-_final-1000x7061.jpg",
  },
  {
    title:
      "Religious sentiments being ‘hurt’ or political motives being achieved?",
    description:
      "An exploration of the tension between genuine religious sentiments and the possibility of political motives being advanced under the guise of religious offense. The discussion...",
    link: "https://theleaflet.in/criminal-justice/religious-sentiments-being-hurt-or-political-motives-being-achieved",
    date: "29/02/2022",
    timeRead: "12 Min",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGsx0vB7uoS6NeyV3b7aXMjWQhMUdqsXtMQ&s",
  },
  {
    title:
      "Justice Can’t Breathe! Time to Revisit Immunity Granted to Cops in India",
    description:
      "The brazen murder of George Floyd by Derek Chauvin in police custody should have been a wake-up call for India, where immunity granted under Section 197 of the CrPc has often been misused by cops to commit...",
    link: "https://theleaflet.in/criminal-justice/religious-sentiments-being-hurt-or-political-motives-being-achieved",
    date: "22/07/2021",
    timeRead: "10 Min",
    image:
      "https://media.assettype.com/theleaflet/import/wp-content/uploads/2023/10/Newsclick-scaled.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
  },
];

// Default Blog Posts
const blogPosts = [
  {
    title: "Justice Meets Technology: How AI is Transforming Court Research",
    description:
      "The legal landscape has always been slow to adapt to technological changes. However, the rise of artificial intelligence (AI) is creating a seismic shift in the way court research is conducted. From simplifying case...",
    link: "/posts/ai-in-court-research.html",
    date: "24/12/2024",
    timeRead: "15 Min",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*SvAmMeDL03MxWOothby3tQ.png",
  },
  {
    title:
      "Common Legal Mistakes Small Businesses Make (and How to Avoid Them)",
    description:
      "Running a small business is an exciting venture, but it comes with its fair share of challenges, especially when it comes to navigating legal matters. Many entrepreneurs focus on building...",
    link: "/posts/small-business-law.html",
    date: "27/12/2024",
    timeRead: "9 Min",
    image:
      "https://www.dell.com/wp-uploads/2022/08/small-business-owner-1280x800-1.jpg",
  },
];

// Function to Load Posts into the .post-cards Container
const loadPosts = (posts) => {
  const postCardsContainer = document.querySelector(".post-cards");
  postCardsContainer.innerHTML = ""; // Clear existing content

  posts.forEach((post) => {
    const postCard = `
      <a class="post-link" href="${post.link}" target="_blank">
        <div class="post-card">
          <div class="post-img">
            ${
              post.image
                ? `<img src="${post.image}" alt="Cover Image Blog" />`
                : ""
            }
          </div>
          <div class="post-text">
            <h6>${post.title}</h6>
            <p>${post.description}</p>
            <div class="post-stats">
              <div class="date">
                <i class="ri-calendar-line"></i>${post.date}
              </div>
              <div class="read-time">
                <i class="ri-time-line"></i>${post.timeRead}
              </div>
              <div class="author">
                <i class="ri-edit-2-line"></i>Ravi Singh Chhikara
              </div>
            </div>
          </div>
        </div>
      </a>
    `;
    postCardsContainer.innerHTML += postCard;
  });
};

// Load Default Blog Posts on Page Load
window.addEventListener("DOMContentLoaded", () => {
  loadPosts(blogPosts);
});

// Add Event Listeners for Buttons
document.getElementById("blg-pst").addEventListener("click", () => {
  document.getElementById("blg-pst").classList.add("pst-selected"); // Highlight selected tab
  document.getElementById("blg-pr").classList.remove("pst-selected");
  loadPosts(blogPosts); // Load Blog Posts (Initial State)
});

document.getElementById("blg-pr").addEventListener("click", () => {
  document.getElementById("blg-pr").classList.add("pst-selected"); // Highlight selected tab
  document.getElementById("blg-pst").classList.remove("pst-selected");
  loadPosts(pressReleases); // Load Press Releases
});
