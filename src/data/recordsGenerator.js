import defaultSelectionOptions from "./defaultSelectionOptions";

import genresData from "./genresData";
import shortid from "shortid";

function defineColor(genre) {
  return genresData.find(({ id }) => id === genre).color || null;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomDate() {
  const START_DATE = new Date(2020, 0, 1).getTime();
  const END_DATE = Date.now();
  return random(START_DATE, END_DATE);
}

function getRandomElement(array) {
  return array[random(0, array.length - 1)];
}

function getRandomElements(count, array) {
  const results = [];
  for (let i = 1; i < count + 1; i++) {
    const el = getRandomElement(array);
    if (results.find(({ id }) => el.id === id)) {
      i--;
    } else {
      results.push(el);
    }
  }
  return results;
}

function getSectionsWithRandomValues() {
  const sNames = ["situation", "feelings", "reactions"];
  const sections = {};
  for (const name of sNames) {
    const values = [
      ...getRandomElements(
        random(1, 5),
        defaultSelectionOptions.filter(({ section }) => section === name)
      ),
    ];

    sections[name] = values.map(({ id, value, genre }) => ({
      id,
      value,
      color: defineColor(genre),
    }));
  }
  return sections;
}

export function generateRecord() {
  const date = getRandomDate();
  return {
    id: shortid.generate(),
    date,
    sections: { ...getSectionsWithRandomValues() },
  };
}

export function* generateRecords(count) {
  for (let i = 0; i < count; i++) {
    yield generateRecord();
  }
}
