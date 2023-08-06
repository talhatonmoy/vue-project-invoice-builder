const invoice1 = {
  invoiceNumber: "INV12345",
  sender: "Talha Tonmoy",
  billTo: "Learn With Hasin Hyder",
  shipTo: "Shipping Address",
  date: "2023-08-01",
  dueDate: "2023-09-01",
  additionalNote: "Thank you for your business!",
  items: [
    {
      description: "Product A",
      quantity: 2,
      rate: 25.99,
      discount: 0.1,
      discountAmount: 5.2,
      amount: 46.78,
    },
    {
      description: "Product B",
      quantity: 1,
      rate: 14.5,
      discount: 0.05,
      discountAmount: 0.72,
      amount: 13.78,
    },
    {
      description: "Product C",
      quantity: 5,
      rate: 9.99,
      discount: 0,
      discountAmount: 0,
      amount: 49.95,
    },
    // Add more items here if needed
  ],
  notes: "Please make the payment by the due date.",
  terms: "Net 30",
  subTotal: 110.51,
  tax: 7.5,
  totalDiscountAmount: 6.92,
  total: 111.09,
};

export { invoice1 };
