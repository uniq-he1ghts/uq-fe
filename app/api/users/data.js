import img1 from "@/public/images/uq.png";
import { faker } from "@faker-js/faker";
import { formatDate } from "@/lib/utils";
import { statuses, generateAssignments, priorities } from "../projects/data";
export const users = [
  {
    boardId: 1,
    id: 1,
    title: "John Doe",
    desc: "Create a Brand logo design for a DashTail Admin.",
    WorkEmail: "Johndoe@gmail.com",
    phone: "+1920202",
    company: "Uniq Heights",
    status: "Pending",
    amazonBrand: "Unique Height",
    marketplace: "Europe",
    role: "E-commerce Manager",
    linkASIN: [
      {
        asin: "B0DG3MQ5JJ",
      },
      {
        asin: "B08TMN8Q42",
      },
      {
        asin: "B07CJMYL74",
      },
      {
        asin: "B09HZJY9LZ",
      },
    ],
    image: img1,
  },

  {
    boardId: 12,
    id: 12,
    title: "john doe",
    desc: "Create a Brand logo design for a DashTail Admin.",
    WorkEmail: "Johndoe@gmail.com",
    phone: "+1920202",
    company: "Uniq Heights",
    status: "Active",
    amazonBrand: "Unique Height",
    marketplace: "UAE",
    role: "Marketing Manager",
    linkASIN: [
      {
        asin: "B0DG3MQ5JJ",
      },
      {
        asin: "B08TMN8Q42",
      },
      {
        asin: "B07CJMYL74",
      },
      {
        asin: "B09HZJY9LZ",
      },
    ],
    image: img1,
  },
  {
    boardId: 2,
    id: 2,
    title: "Johne Doe",
    desc: "Create a Brand logo design for a DashTail Admin.",
    WorkEmail: "Johndoe@gmail.com",
    phone: "+1920202",
    company: "Uniq Heights",
    status: "Active",
    amazonBrand: "Unique Height",
    marketplace: "USA",
    role: "Owner",
    linkASIN: [
      {
        asin: "B0DG3MQ5JJ",
      },
      {
        asin: "B08TMN8Q42",
      },
      {
        asin: "B07CJMYL74",
      },
      {
        asin: "B09HZJY9LZ",
      },
    ],
    image: img1,
  },
  {
    boardId: 3,
    id: 3,
    title: "Johne Doe",
    desc: "Create a Brand logo design for a DashTail Admin.",
    WorkEmail: "Johndoe@gmail.com",
    phone: "+1920202",
    company: "Uniq Heights",
    status: "Active",
    amazonBrand: "Unique Height",
    marketplace: "Austerlia",
    role: "Amazon Manager",
    linkASIN: [
      {
        asin: "B0DG3MQ5JJ",
      },
      {
        asin: "B08TMN8Q42",
      },
      {
        asin: "B07CJMYL74",
      },
      {
        asin: "B09HZJY9LZ",
      },
    ],
    image: img1,
  },
  {
    boardId: 3,
    id: 4,
    title: "Maria Stone",
    desc: "Create a Brand logo design for a DashTail Admin.",
    WorkEmail: "Johndoe@gmail.com",
    phone: "+1920202",
    company: "Uniq Heights",
    status: "Pending",
    role: "Amazon Manager",
    amazonBrand: "Hud Organics",
    marketplace: "Europe",
    linkASIN: [
      {
        asin: "B0DG3MQ5JJ",
      },
      {
        asin: "B08TMN8Q42",
      },
      {
        asin: "B07CJMYL74",
      },
      {
        asin: "B09HZJY9LZ",
      },
    ],
    image: img1,
  },
];

function generateSubTasks(numItems) {
  const data = [];

  for (let i = 1; i <= numItems; i++) {
    const numAssign = faker.number.int({ min: 1, max: 10 });
    const assignObjects = generateAssignments(numAssign);

    const currentYear = new Date().getFullYear();
    const assignDate = faker.date.past(
      `${currentYear}-01-01`,
      `${currentYear}-12-31`
    );
    const dueDate = faker.date.future(assignDate, `${currentYear}-12-31`);
    // faker.number.int({ min: 1000, max: 9999 })
    const newItem = {
      id: i,
      title: faker.hacker.ingverb(),
      status: faker.helpers.arrayElement(statuses).value,
      linkASIN: assignObjects,
      assignDate: formatDate(assignDate),
      dueDate: formatDate(dueDate),
      completed: faker.datatype.boolean(),
      logo: null,
      taskId: 1,
    };
    data.push(newItem);
  }

  return data;
}

export const subTasks = generateSubTasks(6);
