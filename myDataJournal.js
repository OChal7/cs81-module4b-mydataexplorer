// GitHub Repo: https://github.com/YOUR_USERNAME/cs81-module4b-mydataexplorer

const weekData = [
  { day: "Monday", sleepHours: 6.5, screenTime: 4, mood: "tired", caffeineIntake: 3, focusLevel: 6 },
  { day: "Tuesday", sleepHours: 7, screenTime: 3.5, mood: "focused", caffeineIntake: 3, focusLevel: 8 },
  { day: "Wednesday", sleepHours: 6, screenTime: 4.5, mood: "distracted", caffeineIntake: 4, focusLevel: 5 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 3, mood: "productive", caffeineIntake: 2, focusLevel: 9 },
  { day: "Friday", sleepHours: 6.5, screenTime: 4, mood: "stressed", caffeineIntake: 4, focusLevel: 4 },
  { day: "Saturday", sleepHours: 9, screenTime: 5, mood: "relaxed", caffeineIntake: 2, focusLevel: 7 },
  { day: "Sunday", sleepHours: 8, screenTime: 3.5, mood: "calm", caffeineIntake: 1, focusLevel: 6 }
];

/* 
Predictions: 
    Saturday most screen time
    Best focus day is Thursday
    Caffeine is helping focus
*/

function findHighestScreenTime(data) {
  let highDay = data[0];
  
  for (let day of data) {
    if (day.screenTime > highDay.screenTime) {
      highDay = day;
    }
  }
  
  console.log("Most screen time is on", highDay.day, `with ${highDay.screenTime} hrs`);
  return highDay.day;
}

function averageSleep(data) {
  let totalSleep = 0;

  for (let dayInfo of data) {
    totalSleep += dayInfo.sleepHours;
  }

  const average = totalSleep / data.length;
  console.log("Average sleep is", average.toFixed(1), "hrs");
  return average;
}

function mostFrequentMood(data) {
  const moodCounts = {};

  for (let dayInfo of data) {
    if (!moodCounts[dayInfo.mood]) {
      moodCounts[dayInfo.mood] = 1;
    } else {
      moodCounts[dayInfo.mood]++;
    }
  }

  let topMood = "";
  let topCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > topCount) {
      topMood = mood;
      topCount = moodCounts[mood];
    }
  }

  console.log("Most common mood:", `"${topMood}"`);
  return topMood;
}

function correlateCaffeineToFocus(data) {
  let focusOnHighCaffeineDays = 0;
  let focusOnLowCaffeineDays = 0;
  let numberOfHighCaffeineDays = 0;
  let numberOfLowCaffeineDays = 0;

  for (let dayInfo of data) {
    if (dayInfo.caffeine >= 3) {
      focusOnHighCaffeineDays += dayInfo.focus;
      numberOfHighCaffeineDays++;
    } else {
      focusOnLowCaffeineDays += dayInfo.focus;
      numberOfLowCaffeineDays++;
    }
  }

  const averageFocusHigh = focusOnHighCaffeineDays / numberOfHighCaffeineDays;
  const averageFocusLow = focusOnLowCaffeineDays / numberOfLowCaffeineDays;

  const doesHelp = averageFocusHigh > averageFocusLow ? "Yes!" : "Nope!";
  console.log("Does more caffeine = better focus? →", doesHelp);
  return doesHelp;
}

console.log("Analyzing Oscar's Data Journal...\n");

findHighestScreenTime(weekData);
averageSleep(weekData);
mostFrequentMood(weekData);
correlateCaffeineToFocus(weekData);
