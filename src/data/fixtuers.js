import sectionsData from "./sectionsData";

export const valuesData = [
  { id: "12312", value: "value1", color: "red" },
  { id: "151", value: "value2", color: "blue" },
];

export const textareaConf = {
  value: "teesst value",
  onChange: jest.fn(),
  placeholder: "placeholder",
};

export const modalFormConf = {
  title: "testForm",
  show: false,
  setShow: jest.fn(),
  textareaConf,
};

export const generateEmptySectionsValues = () => {
  const sectionsValues = {};
  sectionsData.forEach(({ id }) => (sectionsValues[id] = []));
  return sectionsValues;
};

export const generData = { genreId: "fear", section: "feelings", genreName: "Lęk" };

export const daysRecords = [
  {
    date: 1591888835171,
    dateString: "11.06.2020",
    records: [
      {
        id: "tItI6dNh3",
        date: 1591888835171,
        sections: {
          situation: [],
          though: [{ id: "textarea", value: "sad", color: null }],
          feelings: [
            { id: "zKYfjeNn", color: "#ffc400", value: "lęk" },
            { id: "GqFFZLV1", color: "#ffc400", value: "nieśmiałość" },
            { id: "rkb75Jcd", color: "#ffc400", value: "płoszenie się" },
            { id: "vCzvQ_p9", color: "#cf5300", value: "poczucie niższości" },
            { id: "hp3Y6Pkt", color: "#cf5300", value: "lekceważenie" },
            { id: "t-luANtp", color: "#66DA26", value: "miłość" },
            { id: "AKF3kvCq", color: "#66DA26", value: "pewność siebie" },
            { id: "GAsD0KOB", color: "#f30000", value: "złość" },
            { id: "m18bMnCB", color: "#f30000", value: "gniew" },
            { id: "Bx-54HmL", color: "#7e7877", value: "przygnębienie" },
            { id: "Mt0ZCypF", color: "#7e7877", value: "ból" },
          ],
          reactions: [],
        },
      },
      {
        id: "IrmhGb7-t",
        date: 1591888813399,
        sections: {
          situation: [{ id: "2J7aEejr", color: null, value: "mamy" }],
          though: [],
          feelings: [
            { id: "Sk1Iee4r", color: "#7e7877", value: "zranienie" },
            { id: "Mt0ZCypF", color: "#7e7877", value: "ból" },
            { id: "GqFFZLV1", color: "#ffc400", value: "nieśmiałość" },
            { id: "QpyAdNzG", color: "#ffc400", value: "bojaźliwość" },
          ],
          reactions: [],
        },
      },
      {
        id: "6XvtpB_sN",
        date: 1591888803214,
        sections: {
          situation: [{ id: "FIwq8ZTT", color: null, value: "na treningu" }],
          though: [],
          feelings: [
            { id: "jDMd_1vp", color: "#66DA26", value: "spokój" },
            { id: "MnHO05w3", color: "#66DA26", value: "wesołość" },
            { id: "563a9dls", color: "#f30000", value: "sarkazm" },
            { id: "m18bMnCB", color: "#f30000", value: "gniew" },
          ],
          reactions: [],
        },
      },
      {
        id: "mz7JnZ5t3",
        date: 1591888790815,
        sections: {
          situation: [{ id: "textarea", value: "test", color: null }],
          though: [],
          feelings: [
            { id: "rkb75Jcd", color: "#ffc400", value: "płoszenie się" },
            { id: "GqFFZLV1", color: "#ffc400", value: "nieśmiałość" },
            { id: "vCzvQ_p9", color: "#cf5300", value: "poczucie niższości" },
            { id: "1vnT_dRH", color: "#cf5300", value: "upokorzenie" },
          ],
          reactions: [],
        },
      },
    ],
  },
  {
    date: 1591790166471,
    dateString: "10.06.2020",
    records: [
      {
        id: "_ihB9u4j8",
        date: 1591790166471,
        sections: {
          situation: [
            { id: "FIwq8ZTT", color: null, value: "na treningu" },
            { id: "_cF7REb6", color: null, value: "w czasie wolnym" },
          ],
          though: [],
          feelings: [{ id: "d38u6", color: "#66DA26", value: "zadowolenie" }],
          reactions: [],
        },
      },
    ],
  },
  {
    date: 1591701955467,
    dateString: "9.06.2020",
    records: [
      {
        id: "wIFMaqs_j",
        date: 1591701955467,
        sections: {
          situation: [
            { id: "WR8fZT_F", color: null, value: "żony" },
            { id: "8vBUqVYK", color: null, value: "męża" },
          ],
          though: [{ id: "textarea", value: "saas", color: null }],
          feelings: [
            { id: "GqFFZLV1", color: "#ffc400", value: "nieśmiałość" },
            { id: "H_ekTr9u", color: "#ffc400", value: "panikę" },
          ],
          reactions: [],
        },
      },
    ],
  },
];
