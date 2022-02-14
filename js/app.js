let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

/* Grabing all buttons */
const btns = document.querySelectorAll(".btn");

/* Activate cliked button */
const activeBtn = (button) => {
  btns.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

/* Time frames */
const calcTimeFrame = (choice) => {
  if (choice === "daily") {
    return "Yesterday";
  } else if (choice === "weekly") {
    return "Last Week";
  } else {
    return "Last Month";
  }
};

/* Clear activity */
const clearActivity = () => {
  const activities = document.querySelectorAll(".tab");
  activities.forEach((activity) => activity.remove());
};

/* Rendering tab logs */
const renderLog = async (clickOption) => {
  clearActivity();

  const logContainer = document.querySelector("section.tabs");

  data.forEach((activity) => {
    const name = activity.title;
    const activityClass = name.toLowerCase().replace(" ", "-");
    const timeFrame = activity.timeframes[clickOption];
    const previousTimeFrame = calcTimeFrame(clickOption);
    const section = document.createElement("section");
    section.classList.add("tab", activityClass);

    const stringInject = `
     <div class="tab-header">
            <img src="./images/icon-${activityClass}.svg" alt="work tab icon" />
          </div>
          <div class="tab-info">
            <div class="upper">
              <h3 class="log-name">${name}</h3>
               <button class="dots">
                  <img
                    src="./images/icon-ellipsis.svg"
                    alt="three dots icons"
                  />
                </button>
            </div>
            <div class="center">
              <h2 class="current">${timeFrame.current}hrs</h2>
              <div class="previous">
                <p>
                  <span class="last-time">${previousTimeFrame}</span> -
                  <span class="time">${timeFrame.previous}hrs</span>
                </p>
              </div>
            </div>
          </div>
    `;

    section.innerHTML = stringInject;
    logContainer.append(section);
  });
};

btns.forEach((button) => {
  button.addEventListener("click", () => {
    activeBtn(button);
    const clickOption = button.dataset.option;
    renderLog(clickOption);
  });
});

btns[0].click();
