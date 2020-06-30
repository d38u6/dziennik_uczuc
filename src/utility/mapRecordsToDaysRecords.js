import sectionsData from "../data/sectionsData";

const defineSectionIcon = (sectionId) =>
  sectionsData.find(({ id }) => sectionId === id)?.icon;

function* convertSections(sections) {
  for (let [key, value] of Object.entries(sections)) {
    yield { icon: defineSectionIcon(key), values: value };
  }
}

export default (records, withSectionsConvert) => {
  const days = [];
  for (let record of records) {
    if (withSectionsConvert) {
      record = { ...record, sections: [...convertSections(record.sections)] };
    }
    const recordDateString = new Date(record.date).toLocaleDateString();
    const dayIndex = days.findIndex(
      ({ dateString }) => dateString === recordDateString
    );
    if (dayIndex < 0) {
      days.push({
        date: record.date,
        dateString: recordDateString,
        records: [record],
      });
    } else {
      days[dayIndex].records.push(record);
    }
  }
  return days;
};
