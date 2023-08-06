<script setup>
</script>

<template>
  <section class="bg-gray-100 p-4 rounded-lg text-gray-600">
    <div class="mx-auto container bg-white border rounded-lg border-gray-400 min-h-screen p-12">
      <div class="flex justify-between">
        <div class="flex flex-col text-left space-y-5 w-1/2s">
          <div class=" ">
            <img class="w-40"
              src="https://www.shutterstock.com/image-vector/invoice-typographic-stamp-sign-badge-600w-1027820257.jpg"
              alt="">
          </div>
          <!-- Sender -->
          <p class="mt-5">
            Sender
          </p>
          <textarea  class="focus:outline-none" name="" id="" cols="30" rows="2"></textarea>
          <!-- Sender End -->

          <!-- Bill and Ship to -->
          <div class="flex space-x-2 ">
            <div class="flex flex-col">
              <span>Bill to</span>
              <textarea class="focus:outline-none" name="" id=""  rows="2"></textarea>
            </div>
            <div class="flex flex-col">
              <span>Ship to</span>
              <textarea class="focus:outline-none" name="" id="" rows="2"></textarea>
            </div>
          </div>
          <!-- Bill and Ship to end -->
        </div>
        <div class="flex flex-col w-1/2 items-end">
          <h1 class="mt-12 text-4xl uppercase text-right mb-5">Invoice</h1>
          <!-- Invoice Number -->
          <input class="w-[200px] text-right focus:outline-none" type="text" placeholder="Invoice Number">
          <!-- Invoice Number End -->

          <!-- Date, Due Date, Additional Note -->
          <div class="mt-10 flex-y-5 text-right space-y-3 w-full">
            <p>
              <span>Date</span>
              <input class="focus:outline-none ml-2 w-[200px] ">
            </p>
            <p>
              <span>Due Date</span>
              <input class="focus:outline-none ml-2 w-[200px]">
            </p>
            <p>
              <span>Additional Note</span>
              <input class="focus:outline-none ml-2 w-[200px]" type="text">
            </p>
          </div>
          <!-- Date, Due Date, Additional Note End -->
        </div>
      </div>
      <div class="mt-20">
        <table class="table-auto w-full">
          <tr class="bg-gray-800 text-left text-white">
            <th class="p-2 pl-5">Action</th>
            <th class="p-2 pl-5 w-1/2">Item</th>
            <th class="p-2">Quantity</th>
            <th class="p-2">Rate</th>
            <th class="p-2">Discount</th>
            <th class="p-2 w-[200px] text-right pr-5">Amount</th>
          </tr>
          <tr>
            <td class="py-1 ">
               <i class="fa-solid fa-square-xmark text-2xl text-gray-600"></i>
            </td>
            <td class="py-1">
              <input class="w-full focus:outline-none text-md pl-5" type="text" placeholder="Description" />
            </td>
            <td class="">
              <input class="w-full focus:outline-none text-md" type="number" placeholder="Quantity" />
            </td>
            <td class="">
              <input class="w-full focus:outline-none text-md" type="number" placeholder="Rate">
            </td>
            <td class="">
              <input class="w-full focus:outline-none text-md" type="number" placeholder="Discount">
            </td>
            <td class="py-1 pr-5 text-right text-md text-gray-800">
              $ 0.00
            </td>
          </tr>
        </table>

        <div class="flex">
          <button class="mt-5 text-sm bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add More
          </button>
        </div>

      </div>

      <div class="mt-[200px]">
        <div class="flex justify-between">
          <!-- Notes and Terms -->
          <div class="flex flex-col text-left space-y-5 w-1/2">
            <span>Notes</span>
            <textarea name="" id="" cols="30" class="focus:outline-none" rows="2"></textarea>
            <span>Terms</span>
            <textarea name="" id="" cols="30" class="focus:outline-none" rows="2"></textarea>
          </div>
          <!-- Notes and Terms End -->

          <div class="flex flex-col w-1/2 items-end">
            <div class="mt-10 flex-y-5 text-right space-y-3 w-full">
              <p>
                <span>Subtotal</span>
                <input readonly class="focus:outline-none text-right ml-2 pr-4 w-[200px] border-0"
                  placeholder="Subtotal">
              </p>
              <p>
                <span>Tax (%)</span>
                <input type="number" class="tax focus:outline-none text-right w-[200px] ml-2">
              </p>
               <p>
                  <span>Total Discount</span>
                  <input readonly class="focus:outline-none text-right ml-2 pr-4 w-[200px] border-0"
                    placeholder="Total Discount">
                </p>
              <p>
                <span>Total</span>
                <input readonly class="focus:outline-none text-right ml-2 pr-4 w-[200px] border-0"
                  placeholder="Total">
              </p>
              
            </div>
          </div>
        </div>
      </div>

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
}
</style>
