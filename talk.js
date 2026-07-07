// orderSampleData.js

const terminals = [
  "JPR001",
  "JPR002",
  "JPR003",
  "JPR004",
  "JPR005",
  "JPR006",
  "JPR007",
  "JPR008",
  "JPR009",
  "JPR010",
];

const statuses = [
  "Pending",
  "Processing",
  "Printed",
  "Ready",
  "Completed",
  "Cancelled",
];

const paymentMethods = ["upi", "card", "cash", "wallet"];
const paymentStatuses = ["paid", "pending", "failed"];
const collectionTypes = ["now", "later"];
const fileTypes = ["PDF", "DOCX", "PPT", "JPG"];
const colorModes = ["b&w", "color"];
const printSides = ["single", "double"];

const userNames = [
  "Aarav Sharma",
  "Vivaan Singh",
  "Aditya Verma",
  "Krishna Meena",
  "Rohan Gupta",
  "Priya Sharma",
  "Ananya Jain",
  "Sneha Verma",
  "Neha Gupta",
  "Kavya Singh",
];

const orderSampleData = Array.from({ length: 70 }, (_, i) => {
  const pageCount = Math.floor(Math.random() * 90) + 10;
  const copies = Math.floor(Math.random() * 5) + 1;

  const colorMode =
    colorModes[Math.floor(Math.random() * colorModes.length)];

  const printSide =
    printSides[Math.floor(Math.random() * printSides.length)];

  const perPage =
    colorMode === "color"
      ? printSide === "double"
        ? 10
        : 5
      : printSide === "double"
      ? 2
      : 1;

  const price = pageCount * copies * perPage;

  return {
    _id: `6a450588fa3bf8ae9bfca${(600 + i).toString(16)}`,

    orderId: `PEZ-250${String(i + 1).padStart(3, "0")}`,

    terminal_Id: terminals[i % terminals.length],

    userId: `user${String(i + 1).padStart(3, "0")}`,

    user_name: `${userNames[i % userNames.length]} ${
      Math.floor(i / userNames.length) + 1
    }`,

    status: statuses[Math.floor(Math.random() * statuses.length)],

    cloudinaryPublicId: `orders/file_${i + 1}`,

    cloudinaryURL: `https://res.cloudinary.com/demo/raw/upload/file_${
      i + 1
    }.pdf`,

    otp: Math.floor(10000 + Math.random() * 90000),

    fileName: `Document_${i + 1}.pdf`,

    fileType: fileTypes[Math.floor(Math.random() * fileTypes.length)],

    pageCount,

    colorMode,

    printSide,

    copies,

    price,

    collectionType:
      collectionTypes[Math.floor(Math.random() * collectionTypes.length)],

    payment: {
      status:
        paymentStatuses[
          Math.floor(Math.random() * paymentStatuses.length)
        ],

      method:
        paymentMethods[
          Math.floor(Math.random() * paymentMethods.length)
        ],

      razorpayPaymentId: `pay_${100000 + i}`,

      razorpayOrderId: `order_${200000 + i}`,

      razorpaySignature: `sig_${300000 + i}`,
    },

    collected: Math.random() > 0.4,

    payout: {
      id: `payout_${400000 + i}`,

      status: ["pending", "processing", "completed"][
        Math.floor(Math.random() * 3)
      ],

      amount: price - Math.round(price * 0.02),

      platformCommission: Math.round(price * 0.02),
    },

    uploadedAt: new Date(
      2026,
      6,
      (i % 28) + 1,
      10 + (i % 8),
      (i * 7) % 60
    ),

    updatedAt: new Date(
      2026,
      6,
      (i % 28) + 1,
      11 + (i % 8),
      (i * 7) % 60
    ),
  };
});

export default orderSampleData;

// For CommonJS:
// module.exports = orderSampleData;
