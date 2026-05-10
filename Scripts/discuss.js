const threadContainer = document.getElementById("threadContainer");
const channels = document.querySelectorAll(".channel");
const chatTitle = document.querySelector(".chat-title");
const chatSub = document.querySelector(".chat-sub");
const threadInput = document.getElementById("threadInput");

let currentChannel = "# web-development";

const channelDescriptions = {
  "# web-development":
    "Frontend dashboards, responsive layouts and LMS discussions",

  "# python-help":
    "Python doubts, debugging and coding discussions",

  "# placements":
    "Placement preparation, internships and interview guidance",

  "# project-team":
    "Collaborative team discussions and project coordination"
};

let threads = [
  {
    id: 1,
    user: "Riya Sharma",
    time: "7:42 PM",
    channel: "# web-development",
    closed: false,
    message:
      "Can someone explain how the dashboard cards were aligned responsively?",
    replies: [
      {
        user: "Kabir Singh",
        text: "Use CSS Grid with auto-fit and minmax."
      },
      {
        user: "Aryan Kumar",
        text: "Flexbox works well too for smaller sections."
      }
    ]
  },

  {
    id: 2,
    user: "Aditya Rao",
    time: "8:04 PM",
    channel: "# python-help",
    closed: true,
    message:
      "How do we optimize recursion depth in Python DFS problems?",
    replies: [
      {
        user: "Sneha Kapoor",
        text: "Try memoization or iterative DFS with stacks."
      }
    ]
  },

  {
    id: 3,
    user: "Meera Shah",
    time: "8:21 PM",
    channel: "# placements",
    closed: true,
    message:
      "Which companies are expected for the next campus drive?",
    replies: [
      {
        user: "Placement Cell",
        text: "Official announcements will be released soon."
      }
    ]
  },

  {
    id: 4,
    user: "Rahul Verma",
    time: "9:02 PM",
    channel: "# project-team",
    closed: true,
    message:
      "Can everyone upload their UI modules before Friday?",
    replies: [
      {
        user: "Aditi Singh",
        text: "Navbar and dashboard completed."
      }
    ]
  }
];

const savedThreads =
  localStorage.getItem("discussionThreads");

if (savedThreads) {
  threads = JSON.parse(savedThreads);
}

function getInitials(name) {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

function saveThreads() {
  localStorage.setItem(
    "discussionThreads",
    JSON.stringify(threads)
  );
}

channels.forEach(channel => {

  channel.addEventListener("click", () => {

    channels.forEach(c => {
      c.classList.remove("active-channel");
    });

    channel.classList.add("active-channel");

    currentChannel =
      channel.textContent.trim();

    chatTitle.textContent =
      currentChannel;

    chatSub.textContent =
      channelDescriptions[currentChannel];

    renderThreads();

  });

});

function renderThreads() {

  threadContainer.innerHTML = "";

  const filteredThreads = threads.filter(
    thread => thread.channel === currentChannel
  );



  if (filteredThreads.length === 0) {

    threadContainer.innerHTML = `
      <div class="thread-card">
        <div class="thread-message">
          No discussions yet in this channel.
        </div>
      </div>
    `;

    return;
  }
  filteredThreads.forEach(thread => {

    const threadCard =
      document.createElement("div");

    threadCard.className =
      "thread-card";



    let repliesHTML = "";

    thread.replies.forEach(reply => {

      repliesHTML += `
        <div class="reply">
          <div class="reply-user">
            ${reply.user}
          </div>
          <div class="reply-text">
            ${reply.text}
          </div>
        </div>
      `;

    });
    threadCard.innerHTML = `

      <div class="thread-top">

        <div class="thread-user">

          <div class="thread-avatar">
            ${getInitials(thread.user)}
          </div>

          <div>

            <div class="thread-name">
              ${thread.user}
            </div>

            <div class="thread-time">
              ${thread.time}
            </div>

          </div>

        </div>

        ${
          thread.closed
            ? `<div class="closed-badge">Closed</div>`
            : `<div class="open-badge">Open</div>`
        }

      </div>

      <div class="thread-message">
        ${thread.message}
      </div>

      <div class="reply-section">
        ${repliesHTML}
      </div>

      ${
        thread.closed
          ? `
          <div class="thread-closed-note">
            This discussion has been archived.
          </div>
        `
          : `
          <div class="thread-input-area">

            <input
              type="text"
              class="thread-input dynamic-reply"
              placeholder="Reply to thread..."
              data-id="${thread.id}"
            >

            <button
              class="send-btn"
              onclick="replyToThread(${thread.id})"
            >
              Reply
            </button>

          </div>
        `
      }
    `;
    threadContainer.appendChild(threadCard);
  });

}

function replyToThread(id) {

  const input =
    document.querySelector(
      `.dynamic-reply[data-id="${id}"]`
    );

  if (!input.value.trim()) return;
  const thread =
    threads.find(t => t.id === id);

  thread.replies.push({
    user: "Aryan Kumar",
    text: input.value
  });
  saveThreads();
  renderThreads();
}

function addReply() {

  if (!threadInput.value.trim()) return;

  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });



  threads.unshift({

    id: Date.now(),

    user: "Aryan Kumar",

    time: time,

    channel: currentChannel,

    closed: false,

    message: threadInput.value,

    replies: []

  });



  saveThreads();

  threadInput.value = "";

  renderThreads();

}
threadInput.addEventListener(
  "keypress",
  function(event) {

    if (event.key === "Enter") {
      addReply();
    }

  }
);
renderThreads();