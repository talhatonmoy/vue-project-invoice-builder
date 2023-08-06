<script setup>
import { ref, reactive } from 'vue'
import {invoice1} from '../public/data/demoInvoice'

const data = reactive({
  invoiceNumber: '',
  sender: '',
  billTo: '',
  shipTo: '',
  date: '',
  dueDate: '',
  additionalNote: '',
  items: [
    {
      description: '',
      quantity: '',
      rate: '',
      discount: '',
      discountAmount: '',
      amount: ''
    }
  ],
  notes: '',
  terms: '',
  subTotal: '',
  tax: '',
  totalDiscountAmount: '',
  total: ''
})

function addNewItem() {
  data.items.push({
    description: '',
    quantity: '',
    rate: '',
    discount: '',
    discountAmount: '',
    amount: ''
  })
}

function removeItem(index) {
  data.items.splice(index, 1)
}

function getSubtotal() {
  let subTotal = 0;
  data.items.forEach((item) => {
    subTotal += (item.amount + item.discountAmount)
  })
  data.subTotal = subTotal
  return subTotal;
}

function getTotalDiscountAmount() {
  let totalDiscountAmount = 0;
  data.items.forEach((item) => {
    totalDiscountAmount += item.discountAmount
  })
  data.totalDiscountAmount = totalDiscountAmount;
  return totalDiscountAmount;
}


function getTotal() {
  const tax = getSubtotal() * (data.tax / 100)
  const total = getSubtotal() + tax - getTotalDiscountAmount();
  data.total = total
  return total;
}

function saveData() {
  alert('Data Saved, Please check console')
  console.log(data);
}

</script>

<template>
  <section class="bg-gray-100 p-4 rounded-lg text-gray-600">
    <div class="mx-auto min-w-full container bg-white border rounded-lg border-gray-400 min-h-screen p-10">
      <!-- Header -->
      <div class="flex">
        <!-- Logo Img -->
        <div class="">
          <img class="w-40"
            src="https://www.shutterstock.com/image-vector/invoice-typographic-stamp-sign-badge-600w-1027820257.jpg"
            alt="">
        </div>
        <!-- Invoice Number -->
        <div class="w-full text-right">
          <h1 class="text-4xl uppercase text-right mb-5">Invoice</h1>
          <input v-model="data.invoiceNumber" class=" bg-white text-right focus:outline-none" type="text"
            placeholder="Invoice Number">
        </div>
      </div>
      <!-- Header End -->


      <div class="md:flex justify-between">
        <div class=" w-full md:flex flex-col text-left space-y-5 md:w-1/2">
          <!-- Sender -->
          <div class="w-full">
            <p class="mt-5">Sender</p>
            <textarea v-model="data.sender" class="  bg-white focus:outline-none w-full" rows="2"></textarea>
          </div>
          <!-- Bill and Ship to -->
          <div class="flex space-x-2 ">
            <div class="flex flex-col w-1/2">
              <span>Bill to</span>
              <textarea v-model="data.billTo" class="  bg-white focus:outline-none" rows="2"></textarea>
            </div>
            <div class="flex flex-col w-1/2">
              <span>Ship to</span>
              <textarea v-model="data.shipTo" class=" bg-white focus:outline-none" rows="2"></textarea>
            </div>
          </div>
          <!-- Bill and Ship to end -->
        </div>

        <div class="w-full md:flex flex-col  md:w-1/2">
          <!-- Date, Due Date, Additional Note -->
          <div
            class="mt-6 text-left md:text-right w-full space-y-2 sm:space-y-0 sm:flex sm:space-x-3 md:flex-col md:space-x-0 md:space-y-2 ">

            <div class=" space-y-1 w-full md:flex items-center justify-end md:space-x-2">
              <span>Date</span>
              <input v-model="data.date" class=" bg-white focus:outline-none w-full md:w-[200px] ">
            </div>

            <div class=" space-y-1 w-full  md:flex items-center justify-end md:space-x-2">
              <span>Due Date</span>
              <input v-model="data.dueDate" class=" bg-white focus:outline-none w-full md:w-[200px] ">
            </div>

            <div class=" space-y-1 w-full  md:flex items-center justify-end md:space-x-2">
              <span>Additional Note</span>
              <textarea  v-model="data.additionalNote" class=" bg-white focus:outline-none w-full md:w-[200px] "></textarea>
            </div>

          </div>

          <!-- Date, Due Date, Additional Note End -->
        </div>
      </div>

      <div class="mt-20">
        <table class="table-auto w-full">
          <tr class="bg-gray-800  text-left text-white">
            <th class="p-2 pl-5 w-10 print:hidden"></th>
            <th class="p-2 pl-5 w-1/4">Item</th>
            <th class="p-2">Quantity</th>
            <th class="p-2">Rate</th>
            <th class="p-2">Discount(%)</th>
            <th class="p-2">Discount Amount</th>
            <th class="p-2 md:w-[200px] text-right pr-5">Amount</th>
          </tr>
          <tr v-for="(item, index) in data.items" :key="index">
            <td @click="removeItem(index)" class="py-1 print:hidden ">
              <i class="fa-solid fa-square-xmark text-2xl text-gray-600"></i>
            </td>
            <td class="py-1">
              <input v-model="item.description" class=" bg-white w-full focus:outline-none text-md pl-5" type="text"
                placeholder="Description" />
            </td>
            <td class="">
              <input v-model="item.quantity" class=" bg-white w-full focus:outline-none text-md" type="number"
                placeholder="Quantity" />
            </td>
            <td class="">
              <input v-model="item.rate" class=" bg-white w-full focus:outline-none text-md" type="number" placeholder="Rate">
            </td>
            <td class="">
              <input v-model="item.discount" class=" bg-white w-full focus:outline-none text-md" type="number"
                placeholder="Discount">
            </td>
            <td class="">
              <input readonly :value="item.discountAmount = (item.quantity * item.rate) * (item.discount / 100)"
                class=" bg-white w-full focus:outline-none text-md" type="number" placeholder="Amount">
            </td>
            <td class="py-1 pr-5 text-right text-md text-gray-800">
              $ {{ item.amount = (item.quantity * item.rate) - item.discountAmount }}
            </td>
          </tr>
        </table>

        <div class="flex print:hidden">
          <button @click="addNewItem()"
            class="mt-5 text-sm border-none bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add More
          </button>
        </div>

      </div>

      <div class="mt-[200px]">
        <div class="md:flex justify-between">

          <!-- Notes and Terms -->
          <div class="flex flex-col text-left space-y-2 w-full md:w-1/2">
            <div class="space-y-1">
              <span class="block">Notes</span>
              <textarea v-model="data.notes" class=" bg-white focus:outline-none w-full" rows="2"></textarea>
            </div>

            <div class="space-y-1">
              <span class="block">Terms</span>
              <textarea v-model="data.terms" class=" bg-white focus:outline-none w-full" rows="2"></textarea>
            </div>
          </div>
          <!-- Notes and Terms End -->

          <div class="flex flex-col w-full md:w-1/2 items-end">
            <div class="mt-6 flex-y-5 text-right space-y-3 w-full">
              <div class="flex justify-end items-center">
                <span>Subtotal</span>
                <input :value="getSubtotal()" readonly class=" bg-white focus:outline-none text-right ml-2 pr-4 w-[200px] border-0" placeholder="Subtotal">
              </div>
              <div class="flex justify-end items-center">
                <span>Tax(%)</span>
                <input v-model="data.tax" type="number" class="  bg-white focus:outline-none text-right w-[200px] ml-2">
              </div>
              <div class="flex justify-end items-center">
                <span>Total Discount Amount</span>
                <input readonly :value="getTotalDiscountAmount()" class="  bg-white focus:outline-none text-right ml-2 pr-4 w-[200px] border-0"
                  placeholder="Total Discount Amount">
              </div>
              <div class="flex justify-end items-center">
                <span>Total</span>
                <input readonly :value="getTotal()" class="  bg-white focus:outline-none text-right ml-2 pr-4 w-[200px] border-0" placeholder="Total">
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Save and Load invoice -->
      <div class="flex space-x-2 print:hidden">
        <button @click="saveData()" class="mt-5 text-sm border-none bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>

        <button @click="Object.assign(data,invoice1)" class="mt-5 text-sm border-none bg-gray-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Load Demo Invoice 1
        </button>
      </div>
      <!-- Save and Load invoice End -->

    </div>
  </section>
</template>

<style scoped>
input,
textarea {
  border: 1px solid #ddd !important;
  padding: 5px;
  border-radius: 5px;
}

input.tax::-webkit-outer-spin-button,
input.tax::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}</style>
